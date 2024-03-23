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
      <Card key={props.title} style={{ height: "100%" }}>
        <CardContent>
          <Box>
            <Typography variant="h3" align="center" padding={2} display="flex" alignItems="center">
              {SkillIcon && <SkillIcon fontSize="inherit"/>}
              {props.title}
            </Typography>
          </Box>
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
                {props.skills.map((skill: any, index: number) => {
                  return (
                    <TableRow key={index}>
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