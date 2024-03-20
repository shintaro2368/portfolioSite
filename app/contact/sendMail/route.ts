import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

export async function POST(request: NextRequest) {

    const req = await request.json();

    const transport: Transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailData = {
        from: process.env.GMAILUSER,
        to: process.env.GMAILUSER,
        subject: `【ポートフォリオサイト通知】${req.company} 様からのお問い合わせ`,
        text: `${req.message} from ${req.email}`,
        html: `
            <p>【会社名】</p>
            <p>${req.company}</p>
            <p>【お名前】</p>
            <p>${req.name}</p>
            <p>【メールアドレス】</p>
            <p>${req.email}</p>
            <p>【お問い合わせ内容】</p>
            <p>${req.message}</p>
        `,
    }

    transport.sendMail(mailData, function(error, info) {
        if(error) {
            console.log("failed to send email");
            console.error(error.stack);
            return new NextResponse("error", {
                status: 500,
            });
        } else {
            console.log(info);
        }
    });

    return new NextResponse('ok', {
        status: 200,
    });
}