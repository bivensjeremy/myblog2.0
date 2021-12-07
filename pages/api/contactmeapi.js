export default function handler (req, res) {
    // require('dotenv').config()
    const HOST = process.env.NEXT_PUBLIC_HOST
    const PASS = process.env.NEXT_PUBLIC_PASS
    const USER = process.env.NEXT_PUBLIC_USER
    
    const nodemailer = require('nodemailer')
    const smtpTrans = nodemailer.createTransport({
        host: HOST,
        port: 465,
        secure: true,
        auth: {
            user: USER,
            pass: PASS
       }
    });
    const mailOpts = {
        from:     'contact@bivensblueprint.com',
        replyTo: `${req.body.email}`,
        to:       'admin@bivensblueprint.com',
        subject: 'Message from My Blog Contact Page',
        html:   `
                <h4><b>Name:</b></h4> ${req.body.name} <br>  
                <h4><b>Email:</b></h4> ${req.body.email} <br> 
                <h4><b>Message:</b></h4> ${req.body.message}
                `
    }
    smtpTrans.sendMail(mailOpts, function(err, success) {
        if (err) {
            res.json({
                status: 'fail'
            })
            console.log(err)
            } else {
                res.json({
                status: 'success'
                })
            }
    });
};