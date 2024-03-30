import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export default function Loading() {
  return(
    <>
      <Box component="div" className="flex justify-center items-center">
        <CircularProgress color='inherit'/>
      </Box>
    </>
  );
}