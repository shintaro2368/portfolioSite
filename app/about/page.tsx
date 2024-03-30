import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { cmsClient } from "../_components/cms-client";
import PageTitle from "../_components/page-titile";


export default async function Page() {

  const profileData = await cmsClient.get({
    customRequestInit: {
      cache: "no-store"
    },
    endpoint: "profile",
  });


  return (
    <>
    <PageTitle title="About">
      <Box display="flex" sx={{alignItems: {xs: "unset", sm: "center"}, flexDirection: {xs: "column", sm: "unset"}}}>
        <Box flexBasis="40%" sx={{marginBottom: {xs: 10, sm: 0}}}> 
          <Image
            src={profileData.image.url}
            alt="桝井真太郎の顔写真です"
            layout="responsive"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />

        </Box>
        <Box flexBasis="60%" sx={{paddingLeft: {xs: 0, sm: 6}}}>
          <p className="whitespace-pre-wrap">
            {profileData.body}
          </p>
        </Box>
      </Box>
    </PageTitle>
    </>
  );
}