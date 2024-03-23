import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { cmsClient } from "../_components/cms-client";

export default async function Page() {

    const profileData = await cmsClient.get({
        customRequestInit: {
            cache: "no-store"
        },
        endpoint: "profile",
    });

    console.log(profileData);


    return(
        <>
            <Typography variant="h5">
                About
            </Typography>
            <Box display="flex">
                <Box width={400} height={400} flexBasis="30%">
                    <Image
                        src={profileData.image.url}
                        alt=""
                        layout="responsive"
                        width={0}
                        height={0}
                        style={{width: "100%", height: "100%", borderRadius:"50%"}}
                    />

                </Box>
                <Box flexBasis="70%" paddingLeft={6}>
                    <p className="whitespace-pre-wrap">
                        {profileData.body}
                    </p>
                </Box>
            </Box>
        </>
    );
}