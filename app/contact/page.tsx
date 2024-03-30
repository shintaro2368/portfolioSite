'use client'

import { FormControl, TextField, Stack, Box, Button, Typography, Container } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PageTitle from '../_components/page-titile';
import Popup from '../_components/popup';
import { useRef, useState } from 'react';

const requiredMessage: string = "必須項目です。";
const invalidEmailMessage: string = "正しいメールアドレスを入力してください。";

// 問い合わせフォームの型を定義
type ContactForm = {
  company: string,
  name: string,
  email: string,
  message: string,
}

// バリデーションを定義
const validation = yup.object({
  company: yup.string().required(requiredMessage),
  name: yup.string().required(requiredMessage),
  email: yup.string().required(requiredMessage).email(invalidEmailMessage),
  message: yup.string().required(requiredMessage),
});


// お問い合わせページ
export default function Page() {

  // お問い合わせを送信しているかの判定
  const submiting = useRef(false);

  // 問い合わせ成功時のダイアログの表示を判定
  const [open, setOpen] = useState(false);

  // ダイアログ表示
  function handleOpne() {
    setOpen(true);
  }

  // ダイアログのOKを押下すると発火
  function handleClose() {
    setOpen(false);
    location.href = "/";
  }

  const { register, handleSubmit, formState: { errors }, } = useForm<ContactForm>({
    resolver: yupResolver(validation),
  });
  const submit: SubmitHandler<ContactForm> = async (data: ContactForm) => {
    submiting.current = true;
    const res = await fetch("/contact/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      handleOpne();
    } else {
      alert("正常に送信できませんでした。");
    }
  };

  return (
    <PageTitle title="Contact">
      <Box component="div" className='bg-white w-full flex justify-center p-3 sm:p-8 rounded-2xl'>
        <FormControl fullWidth className='max-w-[600px]'>
          <Stack spacing={2} direction="column">
            <TextField required label="会社名" {...register("company")} helperText={errors.company?.message} />
            <TextField required label="お名前" {...register("name")} helperText={errors.name?.message} />
            <TextField required label="メールアドレス" type='email' {...register("email")} helperText={errors.email?.message} />
            <TextField required label="お問い合わせ内容" multiline rows={6}  {...register("message")} helperText={errors.message?.message} />
          </Stack>
          <Stack mt={6} alignItems="center">
            <Button onClick={handleSubmit(submit)} disabled={submiting.current} color="inherit" className='w-full sm:w-80 bg-black hover:text-black h-16 sm:h-9'>
              送信
            </Button>
          </Stack>
        </FormControl>
      </Box>
      <Popup
        open={open}
        handleClose={handleClose}
        title="確認"
        description="お問い合わせありがとうございます。
          ご返信まで今しばらくお待ちください。
          OKを押すとトップへ遷移します。"
      />
    </PageTitle>
  );
}