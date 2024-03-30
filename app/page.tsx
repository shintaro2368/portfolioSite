import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";

export default function Page() {
  return (
      <Box component="div">
        <Box component="div" className="p-7 border-l-[3px] border-current">
          <Typography variant="h1" className="animate-slide-in-top tracking-wide">
            <Box component="div" className="text-4xl sm:text-8xl">
              Hello, I&apos;m<br/>Shintaro Masui
            </Box>
          </Typography>
          <Box component="div" className="animate-text-focus-in sm:flex sm:justify-between" maxWidth={630} alignItems="center" py={2}>
            <Box component="div">
              <Typography variant="body1">A university student</Typography>
              <Typography variant="body1">Apprentice Web developer</Typography>
              <Typography variant="body1">Living Oosaka in Japan</Typography>
            </Box>
            <Box component="div" className="flex justify-center sm:mt-0 mt-8">
              <Link href="/about" className="hover:opacity-60">
                  {"Detail me"}
                  <ArrowForwardIosIcon/>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}
