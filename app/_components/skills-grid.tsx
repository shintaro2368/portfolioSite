import SkillCard from "./skill-card";
import { Grid } from "@mui/material";
import { cmsClient } from "./cms-client";

export async function SkillsGrid() {
  const skills = await cmsClient.get({
    customRequestInit: {
      cache: "no-store"
    },
    endpoint: "skills",
  });

  // console.log(skills.contents);

  return (
    <>
      <Grid container columnSpacing={14} rowSpacing={6}>
        {skills.contents.map((skill: any, index: number) => {
          return (
            <Grid item xs={6} key={index}>
              <SkillCard
                title={skill.title}
                iconId={skill.iconCode}
                description={skill.description}
                skills={skill.skills}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}