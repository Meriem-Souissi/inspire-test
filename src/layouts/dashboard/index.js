/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/material/styles";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Dashboard components
import Candidates from "layouts/dashboard/components/Candidates";
import Annonces from "layouts/dashboard/components/Annonces";
import Multiposting from "layouts/dashboard/components/Multiposting";
import Notifications from "layouts/dashboard/components/Notifications";
import Statistics from "layouts/dashboard/components/Statistics";
import BaseCV from "layouts/dashboard/components/Base CV";

const HeaderButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  padding: "11px 14px",
  lineHeight: "23px",
  backgroundColor: "#62A5FF",
  color: "#fff",
  borderRadius: 26,
  height: 45,
  width: 240,
  gap: 9,
  fontFamily: "Poppins",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#62A5FF",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#62A5FF",
  },
});

function Dashboard() {
  return (
    <DashboardLayout>
      <Grid container style={{ justifyContent: "space-between" }}>
        <Typography
          style={{
            color: "#5E5873",
            fontSize: 26,
            fontWeight: 500,
            lineHeight: "32px",
            fontFamily: "Montserrat",
          }}
        >
          Dashboard
        </Typography>
        <HeaderButton variant="contained" disableRipple startIcon={<AddCircleOutlineIcon />}>
          Publier une annonce
        </HeaderButton>
      </Grid>
      <MDBox py={5}>
        <Candidates />
        <MDBox py={3}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} md={6} lg={3.1}>
              <Annonces />
            </Grid>
            <Grid item xs={12} md={6} lg={3.9}>
              <Multiposting />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Statistics />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox py={1}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} md={5} lg={5}>
              <Notifications />
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <BaseCV />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
