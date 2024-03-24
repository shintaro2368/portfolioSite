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

  console.log(profileData);


  return (
    <>
    <PageTitle title="About">
      <Box display="flex" alignItems="center">
        <Box flexBasis="40%">
          <Image
            src={profileData.image.url}
            alt=""
            layout="responsive"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />

        </Box>
        <Box flexBasis="60%" paddingLeft={6}>
          <p className="whitespace-pre-wrap">
            {profileData.body}
          </p>
        </Box>
      </Box>
    </PageTitle>
    </>
  );
}