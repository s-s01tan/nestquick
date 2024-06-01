// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/favicon.png";
import { Instagram, LinkedIn } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "NestQuick",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/s-s01tan/",
    },
    {
      icon: <Instagram />,
      link: "https://instagram.com/s01tan/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/s-s01tan/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@soltechno",
    },
  ],
  menus: [
    {
      name: "Custom",
      items: [
        { name: "Module", href: "/pages/custom/module" },
        { name: "Controller", href: "/pages/custom/controller" },
        { name: "Service", href: "/pages/custom/service" },
        { name: "DTO", href: "/pages/custom/dto" },
        { name: "Enum", href: "/pages/custom/enum" },
        { name: "Interface", href: "/pages/custom/interface" },
      ],
    },
    {
      name: "Suggestions",
      items: [
        { name: "CRUD Module", href: "/pages/suggestion/crud-module" },
        {
          name: "Database (Postgres)",
          href: "/pages/suggestion/database-postgres-module",
        },
        {
          name: "Database (MongoDB)",
          href: "/pages/suggestion/database-mongodb-module",
        },
        {
          name: "Token Module (JWT)",
          href: "/pages/suggestion/token-module-jwt",
        },
        { name: "Cron Module", href: "/pages/suggestion/cron-module" },
        {
          name: "Infrastructure",
          href: "/pages/suggestion/infrastructure-module",
        },
        { name: "Email Module", href: "/pages/suggestion/email-module" },
        { name: "OTP Module", href: "/pages/suggestion/otp-module" },
        { name: "Logger Module", href: "/pages/suggestion/logger-module" },
      ],
    },
    {
      name: "Contact",
      items: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/s-s01tan/" },
        {
          name: "Email",
          href: "mailto: soltanlisoltan.js@gmail.com",
        },
        {
          name: "Call Me",
          href: "tel:+18056562479",
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/s01tan",
        },
        {
          name: "Youtube",
          href: "https://www.youtube.com/@soltechno",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Thank you Creative Tim. Regards, s01tan ❤️
    </MKTypography>
  ),
};
