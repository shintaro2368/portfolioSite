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



  return (
    <>
      <Grid container spacing={6}>
        {worksData.contents.map((work: any, index: number) => {
          console.log(work.image.url);
          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <WorkCard title={work.title} description={work.description} skills={work.skills} url="/" imagePath={work.image.url}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}