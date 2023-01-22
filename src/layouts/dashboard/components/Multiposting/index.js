import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Icons
import { ReactComponent as TestIcon } from "assets/images/icons/dashboard icons/test-com.svg";
import { ReactComponent as JobUpIcon } from "assets/images/icons/dashboard icons/job-up.svg";
import { ReactComponent as IndeedIcon } from "assets/images/icons/dashboard icons/indeed.svg";
import { ReactComponent as TalentIcon } from "assets/images/icons/dashboard icons/talent.com.svg";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

const MultipostingButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 500,
  padding: "11px 24px",
  lineHeight: "23px",
  backgroundColor: "#62A5FF",
  color: "#fff",
  borderRadius: 6,
  minHeight: 10,
  letterSpacing: "0.44px",
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "#62A5FF",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#62A5FF",
  },
});

function Multiposting() {
  function getIcon(type) {
    switch (type) {
      case "Test.com":
        return <TestIcon />;
      case "Jobup":
        return <JobUpIcon />;
      case "Indeed":
        return <IndeedIcon />;
      case "talent.com":
        return <TalentIcon />;
      default:
        return <TestIcon />;
    }
  }
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: "7px",
          padding: "26px 5% 33px 5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardTitle text="Multiposting" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "20px",
              }}
            >
              {getIcon("Test.com")}
              <div>
                <Typography
                  style={{
                    color: "#5E5873",
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: "26px",
                    fontFamily: "Poppins",
                    marginBottom: "4px",
                  }}
                >
                  Test.com
                </Typography>
                <Typography
                  style={{
                    color: "#A8A8A8",
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: "20px",
                    fontFamily: "Montserrat",
                  }}
                >
                  test.com
                </Typography>
              </div>
            </Box>

            <div>
              <Typography
                style={{
                  color: "#5096F4",
                  fontSize: 13,
                  fontWeight: 600,
                  lineHeight: "20px",
                  fontFamily: "Poppins",
                  marginBottom: "4px",
                }}
              >
                10 annonces
              </Typography>
              <Typography
                style={{
                  color: "#A8A8A8",
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontFamily: "Poppins",
                }}
              >
                6 annonces
              </Typography>
            </div>
            {/* <Divider /> */}
          </Box>
          <Divider sx={{ border: "1.09px solid #D8D6DE", margin: "20px 0px" }} />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <MultipostingButton variant="contained">Voir les annonces</MultipostingButton>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Multiposting;
