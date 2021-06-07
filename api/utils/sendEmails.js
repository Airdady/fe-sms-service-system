import sgMail  from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (receiver, source, subject, content) => {  
    const data = {
        to: receiver,
        from: source, 
        subject,
        html: content,
    };
      return sgMail.send(data)
    
    }

  export default sendEmail;