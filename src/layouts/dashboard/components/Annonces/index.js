import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

// Icons
import { ReactComponent as ButtonIcon } from "assets/images/icons/dashboard icons/annonce-button.svg";
import { ReactComponent as PlayIcon } from "assets/images/icons/dashboard icons/play.svg";
import { ReactComponent as BrouillonIcon } from "assets/images/icons/dashboard icons/brouillon.svg";
import { ReactComponent as DesactivatedIcon } from "assets/images/icons/dashboard icons/desactivated.svg";
import { ReactComponent as ExpiredIcon } from "assets/images/icons/dashboard icons/expired.svg";
import { ReactComponent as ArchiveIcon } from "assets/images/icons/dashboard icons/archive.svg";

function Annonces() {
  function getIcon(type) {
    switch (type) {
      case "play":
        return <PlayIcon />;
      case "brouillon":
        return <BrouillonIcon />;
      case "desactivated":
        return <DesactivatedIcon />;
      case "expired":
        return <ExpiredIcon />;
      case "archive":
        return <ArchiveIcon />;
      default:
        return <PlayIcon />;
    }
  }
  return (
    <Grid item xs={12}>
      <Card sx={{ borderRadius: "7px", padding: "26px 5%" }}>
        <CardTitle text="Annonces" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "37px",
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
              {getIcon("play")}
              <div>
                <Typography
                  style={{
                    color: "#5E5873",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontFamily: "Montserrat",
                    marginBottom: "4px",
                  }}
                >
                  23
                </Typography>
                <Typography
                  style={{
                    color: "#6E6B7B",
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: "20px",
                    fontFamily: "Montserrat",
                  }}
                >
                  En ligne
                </Typography>
              </div>
            </Box>

            <ButtonIcon />
          </Box>

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
              {getIcon("play")}
              <div>
                <Typography
                  style={{
                    color: "#5E5873",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "24px",
                    fontFamily: "Montserrat",
                    marginBottom: "4px",
                  }}
                >
                  23
                </Typography>
                <Typography
                  style={{
                    color: "#6E6B7B",
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: "20px",
                    fontFamily: "Montserrat",
                  }}
                >
                  En ligne
                </Typography>
              </div>
            </Box>

            <ButtonIcon />
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Annonces;
