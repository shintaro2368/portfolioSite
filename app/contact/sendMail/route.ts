import EmailTemplate from "@/app/_components/email-template";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: NextRequest) {
    const {company, name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
        from: `Shintaro-Portfolio System <${process.env.RESEND_DOMAIN}>`,
        to: [process.env.RESEND_DOMAIN as string, process.env.MY_EMAIL as string],
        subject: `【ポートフォリオサイト】 ${name} 様からのお問い合わせ`,
        react: EmailTemplate({company: company, fullName: name, email: email, body: message}),
    });

    if(error) {
        console.log(error.message);
        return new NextResponse("error", {
            status: 500,
        });
    }
    
    return new NextResponse("ok", {
        status: 200,
    })
}