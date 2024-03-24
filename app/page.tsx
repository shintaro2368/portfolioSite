import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";

export default function Page() {
  return (
      <Box component="div">
        <Box borderLeft={3} paddingLeft={4} paddingY={2}>
          <Typography variant="h1" className="animate-slide-in-top tracking-wide">
              Hello, I&apos;m<br/>Shintaro Masui
          </Typography>
          <Box component="div" className="animate-text-focus-in justify-between" display="flex" maxWidth={630} alignItems="center" py={2}>
            <Box component="div">
              <Typography variant="body1">A university student</Typography>
              <Typography variant="body1">Apprentice Web developer</Typography>
              <Typography variant="body1">Living Oosaka in Japan</Typography>
            </Box>
            <Box component="div" display="flex" height={30}>
              <Link href="/about" className="hover:opacity-60">
                  {"Who is shintaro ? "}
                  <ArrowForwardIosIcon/>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}
