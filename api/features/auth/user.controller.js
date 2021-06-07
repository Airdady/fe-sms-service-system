import User from './user.modal';
import AuthUtil from './auth.util';
import sendEmail from '../../utils/sendEmails'
import Response from '../../utils/response';
import bcrypt from 'bcrypt';

const userController = {
  login: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
      if (!user) return Response(res, 404, 'user does not exist');
      if (AuthUtil.comparePassword(password, user.password)) {
        user.password = undefined;
        const token = AuthUtil.createToken({
          _id: user._id,
          email: user.email,
        });
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
sendResetLink:async(req, res) => {
  const {email} = req.body;
  User.findOne({email},(err, user)=>{
    if(err || user) {
      return Response(res, 404, 'User with this email does not Exist'); 
    }
    const token =AuthUtil.sign({
      _id: user._id,
      email: user.email,
    });
      const link = `${req.protocal}://localhost:5000/resetpassword-Link/${token}`
      console.log(token)
      sendEmail(
        email,
        'noreply@airdady.com',
        'Reset password fucntionality',
        `
        <div> Click the link below to reset password</div> <br/>
        <div>${link}</div>
        `
      );
      return user.updateOne({resetLink: token}, function (err, success) {
        if(err) {
          return res.status(409).json({ error: "Resset password error." });
        } else{
          sgMail.send(data, function (error, body) {
            if(error) {
              return res.json({ 
                error: err.message 
              })
            }
            return Response(res, 200, 'Password rese link has been successfully sent to your inbox');
             
          });

        }

      })      
  });
  
},

};

export default userController;
