import User from './user.modal';
import AuthUtil from './auth.util';
import Response from '../../utils/response';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash'
require('dotenv').config()
import mailgun from'mailgun-js';
const DOMAIN ='sandboxcb7f840697084882b21b0965512b79ec.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});


const userController = {
  login: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
      if (!user) return Response(res, 401, 'user does not exist');
      if (AuthUtil.comparePassword(password, user.password)) {
        user.password = undefined;
        const token = AuthUtil.createToken({
          _id: user._id,
          email: user.email,
        });
        User.findOne({ email}).exec((err, user) => {
          if(user) {
              return res.status(409).json({ error: "User already Exist." });
            } 
            const token = jwt.sign({username, email, password}, process.env.APP_KEY, {expiresIn:"100hrs"});
            const data = {
              from: 'noReply@testing.com',
              to: email,
              subject: 'Account Activation Link',
              html: `
               <h2>Please click on given link to activate your account.</h2>
               <link>${process.env.CLIENT_URL}/authentication/activate/${token}</link>
              `
            };
            mg.messages().send(data, function (error, body) {
              if(error) {
                return res.json({
                  error:err.message
                })
              }
              return res.json({message:'Email has been sent Please activate your account'});
            });    
      })
     



        return Response(res, 200, 'login successful', { user, token });
      }
      return Response(res, 401, 'Invalid login details');
    });
  },
  register: (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, password) => {
        User.create({ ...req.body, password }, (err, user) => {
          if (err) {
            return res.status(400).send({ message: 'Create user failed', err });
          }
          return res.status(200).send({
            status: 200,
            message: 'registration successful',
            data: user,
          });
        });
      });
    });
  },
 
 forgotPassword: (req, res)  => {
  const {email} = req.body;
 User.findOne({email}, (err, user) => {
   if(err || !user) {
     return res.status(400).json({ error: "User with this email does not Exist." });
   } 

   const token = jwt.sign({_id: user._id}, process.env.RESET_PASSWORD_KEY, {expiresIn:"20m"});
       const data = {
         from: 'noreplyairdaddy@gmail.com',
         to: email,
         subject: 'Account Activation Link',
         html: `
         <h2>Please click on the link below to reset your password </h2>
         <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>
       `
       };

       return user.updateOne({resetLink: token}, function (err, success) {
         if(err) {
           return res.status(409).json({ error: "Resset password error." });
         } else{
           mg.messages().send(data, function (error, body) {
             if(error) {
               return res.json({ 
                 error: err.message 
               })
             }
             return res.json({message: 'Email has been sent, kindly follow the instructions'})
              
           });

         }

       })      
 }) 

},

resetPassword: (req, res) => {
 const { resetLink, newPassword} = req.body;
 if(resetLink) {
   jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function(error,decodedData) {
     if(error) {
       return res.status(401).json({
         error: "incorrect token or its expired"
       })
    }
    User.findOne({resetLink}, (err,user) => {
     if(err || !user) {
       return res.status(400).json({error:"User with this token does not exist" });
     }
     const obj = {
       password: newPassword,
       resetLink:'' 
      }

      user = _.extend(user, obj);
      user.save((err, result) => {
        if(err) {
          return res.status(400).json({error:"Reset password error"});
        } else {
         return res.status(401).json({error: "Your password haas been changed"})   
        }
      })  
     })
   })
 }else{
   return res.status(401).json({error: "Authantication Error !!!"})

 }

}
};


export default userController;
