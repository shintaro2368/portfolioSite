import { FormControl, TextField, Stack, Box, Button, Typography } from '@mui/material';

// とい
export default function Page() {
    return (
        <Box bgcolor="white" padding={4} borderRadius={3}>
            <Typography color="black" align="center" variant="h2" mb={1}>
                Contact
            </Typography>
            <Box width={600} m="0 auto">
                <FormControl fullWidth>
                    <Stack spacing={2} direction="column">
                        <TextField required label="会社名" />
                        <TextField required label="お名前" />
                        <TextField required label="メールアドレス" type='email' />
                        <TextField required label="お問い合わせ内容" multiline rows={6} />
                    </Stack>
                    <Stack mt={2} alignItems="center">
                        <Button>
                            送信
                        </Button>
                    </Stack>
                </FormControl>
            </Box>
        </Box>
    );
}