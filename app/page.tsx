import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";

export default function Page() {
  return (
      <Box borderLeft={2} paddingLeft={2} component="div" className="">
        <Typography variant="h1" className="animate-slide-in-top">Hello, I'm<br/>Shintaro Masui</Typography>
        <Box component="div" className="animate-slide-in-fwd-bottom justify-between" display="flex" maxWidth={630} alignItems="center">
          <Box component="div">
            <Typography variant="body1">A university student</Typography>
            <Typography variant="body1">Apprentice Web developer</Typography>
            <Typography variant="body1">Living Oosaka in Japan</Typography>
          </Box>
          <Box component="div" display="flex" height={30}>
            <Link href="/about">
                {"Who's shintaro ? "}
                <ArrowForwardIosIcon/>
            </Link>
          </Box>
        </Box>
      </Box>
  );
}
