/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import SignIn from "layouts/pages/authentication/sign-in";
import AboutUs from "layouts/pages/landing-pages/about-us";
import Author from "layouts/pages/landing-pages/author";

// Sections

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SingleGeneratorForm from "layouts/sections/generators/generator-forms";

const routes = [
  {
    name: "Generate",
    icon: <ElectricBoltIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Custom",
        collapse: [
          {
            name: "Module",
            route: "/pages/custom/module",
            component: <AboutUs />,
          },
          {
            name: "Controller",
            route: "/pages/custom/controller",
            component: (
              <SingleGeneratorForm
                value={"Controller"}
                breadcrumb={[
                  {
                    label: "Homepage",
                    route: "/nestquick",
                  },
                  { label: "Controller" },
                ]}
              />
            ),
          },
          {
            name: "Service",
            route: "/pages/custom/service",
            component: <Author />,
          },
          {
            name: "DTO",
            route: "/pages/custom/dto",
            component: <Author />,
          },
          {
            name: "Enum",
            route: "/pages/custom/enum",
            component: <Author />,
          },
          {
            name: "Interface",
            route: "/pages/custom/interface",
            component: <Author />,
          },
        ],
      },
      {
        name: "Suggestions",
        collapse: [
          {
            name: "CRUD Module",
            route: "/pages/suggestion/crud-module",
            component: <SignIn />,
          },
          {
            name: "Database (Postgres)",
            route: "/pages/suggestion/database-postgres-module",
            component: <SignIn />,
          },
          {
            name: "Database (Mongoose)",
            route: "/pages/suggestion/database-mongoose-module",
            component: <SignIn />,
          },
          {
            name: "Token Module (JWT)",
            route: "/pages/suggestion/token-module-jwt",
            component: <SignIn />,
          },
          {
            name: "Cron Module",
            route: "/pages/suggestion/cron-module",
            component: <SignIn />,
          },
          {
            name: "Infrastructure",
            route: "/pages/suggestion/infrastructure-module",
            component: <SignIn />,
          },
          {
            name: "Email Module",
            route: "/pages/suggestion/email-module",
            component: <SignIn />,
          },
          {
            name: "OTP Module",
            route: "/pages/suggestion/otp-module",
            component: <SignIn />,
          },
          {
            name: "Logger Module",
            route: "/pages/suggestion/logger-module",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  // {
  //   name: "sections",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           route: "/sections/page-sections/page-headers",
  //           component: <PageHeaders />,
  //         },
  //         {
  //           name: "features",
  //           route: "/sections/page-sections/features",
  //           component: <Features />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "nav tabs",
  //           route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "pagination",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "forms",
  //           route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "attention catchers",
  //       description: "See all examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "alerts",
  //           route: "/sections/attention-catchers/alerts",
  //           component: <Alerts />,
  //         },
  //         {
  //           name: "modals",
  //           route: "/sections/attention-catchers/modals",
  //           component: <Modals />,
  //         },
  //         {
  //           name: "tooltips & popovers",
  //           route: "/sections/attention-catchers/tooltips-popovers",
  //           component: <TooltipsPopovers />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "elements",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "avatars",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "badges",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //         {
  //           name: "breadcrumbs",
  //           route: "/sections/elements/breadcrumbs",
  //           component: <BreadcrumbsEl />,
  //         },
  //         {
  //           name: "buttons",
  //           route: "/sections/elements/buttons",
  //           component: <Buttons />,
  //         },
  //         {
  //           name: "dropdowns",
  //           route: "/sections/elements/dropdowns",
  //           component: <Dropdowns />,
  //         },
  //         {
  //           name: "progress bars",
  //           route: "/sections/elements/progress-bars",
  //           component: <ProgressBars />,
  //         },
  //         {
  //           name: "toggles",
  //           route: "/sections/elements/toggles",
  //           component: <Toggles />,
  //         },
  //         {
  //           name: "typography",
  //           route: "/sections/elements/typography",
  //           component: <Typography />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Nest",
    icon: <AutoAwesomeIcon />,
    collapse: [
      {
        name: "What is Nest?",
        description: "A progressive Node.js framework for server-side.",
        href: "https://nestjs.com/",
      },
      {
        name: "Documentation",
        description: "Get started with the instructions",
        href: "https://docs.nestjs.com/",
      },
      {
        name: "Source",
        description: "Check out the source code of Nest.js",
        href: "https://github.com/nestjs/nest",
      },
      {
        name: "DevTools",
        description: "Check how you can integrate with your app",
        href: "https://devtools.nestjs.com/",
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/s-s01tan/nestquick",
  },
];

export default routes;
