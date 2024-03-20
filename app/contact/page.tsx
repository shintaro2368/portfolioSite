'use client'

import { FormControl, TextField, Stack, Box, Button, Typography } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';

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

    const {register, handleSubmit, formState: {errors},} = useForm<ContactForm>({
        resolver: yupResolver(validation),
    });
    const submit: SubmitHandler<ContactForm> = async (data: ContactForm) => {
        const res = await fetch("/contact/sendMail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if(res.ok) {
            alert('お問い合わせを送信しました。');
        } else {
            alert("正常に送信できませんでした。");
            console.log(res.status)
        }
    };

    return (
        <Box bgcolor="white" padding={4} borderRadius={3}>
            <Typography color="black" align="center" variant="h2" mb={1}>
                Contact
            </Typography>
            <Box width={600} m="0 auto">
                <FormControl fullWidth>
                    <Stack spacing={2} direction="column">
                        <TextField required label="会社名" {...register("company")} helperText={errors.company?.message}/>
                        <TextField required label="お名前" {...register("name")} helperText={errors.name?.message}/>
                        <TextField required label="メールアドレス" type='email' {...register("email")} helperText={errors.email?.message}/>
                        <TextField required label="お問い合わせ内容" multiline rows={6}  {...register("message")} helperText={errors.message?.message}/>
                    </Stack>
                    <Stack mt={2} alignItems="center">
                        <Button onClick={handleSubmit(submit)}>
                            送信
                        </Button>
                    </Stack>
                </FormControl>
            </Box>
        </Box>
    );
}