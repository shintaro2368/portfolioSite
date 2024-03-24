import { Typography, Box } from "@mui/material";

export default function PageTitle({ title, children }: any) {
  return (
    <Box component="div">
      <Typography variant="h2" align="center" marginBottom={4} className="tracking-widest">{title}</Typography>
      <Box component="div" className="flex items-center justify-center">
        { children }
      </Box>
    </Box>
  );
}