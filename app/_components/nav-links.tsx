import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

// ナビゲーションのリンクを定義しています
export default function NavLinks(): JSX.Element {

  type link = {
    readonly icon: SvgIconComponent,
    readonly name: string,
    readonly href: string,
  }

  const links: link[] = [
    { icon: PersonSearchIcon, name: "About", href: "/about" },
    { icon: ViewListIcon, name: "Works", href: "/works" },
    { icon: HomeRepairServiceIcon, name: "Skills", href: "/skills" },
    { icon: EmailIcon, name: "Contact", href: "/contact" },
    { icon: GitHubIcon, name: "GitHub", href: "https://github.com/shintaro2368"}
  ];

  return (
    <>
      {links.map((link: link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="mx-3"
          >
            <Box display="flex" alignItems="center">
              {<link.icon/>}
              <Typography variant="inherit" paddingX={0.5} className="tracking-wider">{link.name}</Typography>
            </Box>
          </Link>
        )
      })}
    </>
  );
}