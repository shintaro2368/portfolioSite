import { emit } from "process";

export type ContactEmailProps = {
  company: string,
  fullName: string,
  email: string,
  body: string,
}


export default function EmailTemplate({ company, fullName, email, body }: ContactEmailProps) {
  return(
    <div>
      <p>会社名:</p>
      <p>{company}</p>
      <p>氏名:</p>
      <p>{fullName}</p>
      <p>メールアドレス:</p>
      <p>{email}</p>
      <p>お問い合わせ内容:</p>
      <p>{body}</p>
    </div>
  );
}