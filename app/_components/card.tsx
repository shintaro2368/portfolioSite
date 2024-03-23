import { Box, Typography, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";

// TODO 違うファイルで型定義をする
export type CardData = {
    title: string,
    imagePath?: string,
    description: string,
    url: string,
};


export default function WorkCard(props: any) {
    return(
        <Box>
            <Card key={props.url} style={{height: "390px"}}>
                {/* 別タブで表示させる */}
                <CardActionArea href={props.url} target="_blank">
                    <CardMedia
                        component="img"
                        image={props.imagePath}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}