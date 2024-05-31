/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Join Us
                    <br />
                    Contribute
                  </>
                }
                description="Your skills and ideas can help us create something amazing together!"
              />
              <RotatingCardBack
                image={bgBack}
                title="GitHub"
                description="Here is the repository, where you can explore our codebase, report issues, and contribute to the project"
                action={{
                  type: "internal",
                  route: "https://github.com/s-s01tan/nestquick",
                  label: "Open",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Copy & Paste"
                  description="The secret to success is copy and paste. NestQuick gives you the opportunity to copy paste your generated files to implement in your projects!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="download"
                  title="Download"
                  description="You can also download the generated files as a zip file and use them in your projects. That would be easier if you generate the whole CRUD module at once!"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="schedule"
                  title="Save Time & Money"
                  description="Accelerate your development process by automating the creation of NestJS modules, controllers, services, DTOs, and database models, freeing you to focus on building features."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="people"
                  title="Community-Driven Development"
                  description="Join a vibrant community of developers contributing to the project, sharing ideas, reporting issues, and helping each other grow through collaborative development."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
