import { Box, Typography, Rating, Card, CardContent, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import { SvgIconComponent } from "@mui/icons-material";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

// アイコンマッピング
const IconMapping = new Map();
IconMapping.set(1, StorageIcon);
IconMapping.set(2, CodeIcon);
IconMapping.set(3, TerminalIcon);
IconMapping.set(4, SchoolIcon);
IconMapping.set(5, DisplaySettingsIcon)

export default function SkillCard(props: any) {

  const SkillIcon: SvgIconComponent = IconMapping.get(props.iconId);

  return (
    <>
      <Card key={props.title} style={{ height: "100%", padding: "1.1em"}}>
        <CardContent>
          <Box component="div" display="flex" justifyContent="center">
            <Typography gutterBottom variant="h3" padding={2} display="flex" alignItems="center">
              {SkillIcon && <SkillIcon fontSize="inherit"/>}
              <Box component="div" paddingX={1} color="#1e1e1e" className="font-bold">
                {props.title}
              </Box>
            </Typography>
          </Box>
          <Typography variant="body2" className="whitespace-pre-wrap" mb={3} height={50}>
            {props.description}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              {/* ヘッダー ここから */}
              <TableHead style={{backgroundColor: "#7d7d7d"}}>
                <TableRow>
                  <TableCell align="center" className="text-white font-semibold">技術</TableCell>
                  <TableCell align="center" className="text-white font-semibold">経験</TableCell>
                  <TableCell align="center" className="text-white font-semibold">スキル</TableCell>
                </TableRow>
              </TableHead>
              {/* ヘッダー ここまで */}
              <TableBody>
                {props.skills.map((skill: any, index: number) => {
                  return (
                    <TableRow key={index}>
                      {/* 技術 */}
                      <TableCell align="center" component="th">{skill.name}</TableCell>
                      {/* 経験期間 */}
                      <TableCell align="center">{skill.period}</TableCell>
                      {/* 習熟度 星で表示 */}
                      <TableCell align="center">
                        <Rating name={skill.name} readOnly value={skill.rate} size={ skill.rate >= 3 ? "large" : "medium"}/>
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