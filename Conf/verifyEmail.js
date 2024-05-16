import nodemailer from "nodemailer";

const verifyEmail = async (email, link) => {
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        
        const info = transporter.sendMail({
            from: process.env.EMAIL, // sender email
            to: email, // receiver email
            subject: "Verify your email",
            html: `<h1>Verify your email</h1>
            <p>Click <a href="${link}">here</a> to verify your email</p>
            `
        })

        console.log("email send successful")
        
    } catch (error) {
        console.log(error)
    }
}

export default verifyEmail
