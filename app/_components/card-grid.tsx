import { Grid } from "@mui/material";
import WorkCard from "./card";
import { cmsClient } from "./cms-client";


export default async function CardGrid() {

    const worksData = await cmsClient.get({
        customRequestInit: {
            cache: "no-store"
        },
        endpoint: "works",
    });



    return(
        <>
            <Grid container spacing={2}>
                {worksData.contents.map((work: any) => {
                    console.log(work.image.url);
                    return (
                        <Grid item xs={4}>
                            <WorkCard title={work.title} description={work.description} url="/" imagePath={work.image.url}
                            />
                        </Grid>
                        )
                })}
            </Grid>
        </>
    );
}