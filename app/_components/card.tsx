import { Box, Typography, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";

// TODO 違うファイルで型定義をする
export type CardData = {
  title: string,
  imagePath?: string,
  description: string,
  url: string,
};


export default function WorkCard(props: any) {
  return (
      <Card key={props.url} style={{ height: "420px"}} className="shadow-2xl shadow-gray-500">
        {/* 別タブで表示させる */}
        <CardActionArea href={props.url} target="_blank">
          <Box component="div" height={230} bgcolor="black" display="flex" alignItems="center">
            <CardMedia
              component="img"
              image={props.imagePath}
            />
          </Box>
          <CardContent component="div">
            <Box component="div" height={190}>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.skills}
              </Typography>
              <Typography variant="body2">
                {props.description}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}