import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Icons
import { ReactComponent as ChevronDownIcon } from "assets/images/icons/dashboard icons/chevron-down.svg";

// Charts
import { Line } from "react-chartjs-2";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

function BaseCV() {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: "7px",
          padding: "24px 5% 30px 5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "40px",
          }}
        >
          <div>
            <CardTitle text="Ma base CV" />
            <Typography
              style={{
                color: "#6E6B7B",
                fontSize: 15,
                fontWeight: 400,
                lineHeight: "23px",
                fontFamily: "Montserrat",
                marginTop: "-25px",
              }}
            >
              Total des nouveaux profils : <b>3616</b>
            </Typography>
          </div>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                color: "#5096F4",
                fontSize: 15,
                fontWeight: 600,
                lineHeight: "22px",
                fontFamily: "Poppins",
              }}
            >
              Mois
            </Typography>
            <ChevronDownIcon />
          </Box>
        </div>
        <Line
          data={{
            labels: [
              "30/03",
              "01/04",
              "02/04",
              "03/04",
              "04/04",
              "05/04",
              "06/04",
              "07/04",
              "08/04",
              "09/04",
              "10/04",
              "11/04",
            ],
            datasets: [
              {
                data: [140, 190, 150, 220, 170, 320, 75, 300, 230, 370, 280, 250],
                borderWidth: 4,
                // borderColor:
                //   "linear-gradient(to right, rgba(98, 165, 255, 0.15),rgba(0, 94, 255, 1))",
                borderColor: "rgba(98, 165, 255, 0.25)",
                tension: 0.3,
                pointRadius: 0,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
            scales: {
              x: {
                grid: {
                  display: false,
                },
                color: "#A8A8A8",
                font: {
                  size: 13,
                  weight: 400,
                  family: "Poppins",
                },
              },
              y: {
                max: 400,
                beginAtZero: true,
                ticks: {
                  stepSize: 50,
                },
              },
            },
          }}
        />
      </Card>
    </Grid>
  );
}

export default BaseCV;
