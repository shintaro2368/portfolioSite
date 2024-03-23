import { Box, Typography, Rating, Card, CardContent, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export default function SkillCard(props: any) {
  return (
    <>
      <Card key={props.title} style={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h3" align="center" padding={2}>
            {props.title}
          </Typography>
          <Typography variant="body2" className="whitespace-pre-wrap" mb={3}>
            {props.description}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              {/* ヘッダー ここから */}
              <TableHead>
                <TableRow>
                  <TableCell align="center">技術</TableCell>
                  <TableCell align="center">経験</TableCell>
                  <TableCell align="center">習熟度</TableCell>
                </TableRow>
              </TableHead>
              {/* ヘッダー ここまで */}
              <TableBody>
                {props.skills.map((skill: any) => {
                  return (
                    <TableRow>
                      {/* 技術 */}
                      <TableCell align="center" component="th">{skill.name}</TableCell>
                      {/* 経験期間 */}
                      <TableCell align="center">{skill.period}</TableCell>
                      {/* 習熟度 星で表示 */}
                      <TableCell align="center">
                        <Rating name={skill.name} readOnly value={skill.rate} />
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}