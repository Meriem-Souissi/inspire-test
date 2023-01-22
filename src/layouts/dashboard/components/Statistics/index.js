import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Charts
import { Bar } from "react-chartjs-2";

// Icons
import { ReactComponent as ChevronDownIcon } from "assets/images/icons/dashboard icons/chevron-down.svg";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

function Statistics() {
  const statisticsInfos = [
    {
      number: 5,
      description: "Candidats en mission",
    },
    {
      number: 34,
      description: "Candidats partagés",
    },
    {
      number: 12,
      description: "Commandes en ligne",
    },
    {
      number: 4,
      description: "Annonces en ligne",
    },
  ];
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
          }}
        >
          <CardTitle text="Statistiques" />
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
              Semaine
            </Typography>
            <ChevronDownIcon />
          </Box>
        </div>
        <Bar
          data={{
            label: "none",
            labels: ["8/12", "9/12", "10/12", "11/12", "12/12", "13/12", "15/12"],
            datasets: [
              {
                data: [3.5, 0.9, 2, 2.1, 1.7, 1, 0.4],
                backgroundColor: "#28DAC6",
                borderRadius: 109,
                barThickness: 15,
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
                ticks: {
                  position: "center",
                },
                color: "#A8A8A8",
                font: {
                  size: 13,
                  weight: 600,
                  family: "Poppins",
                },
              },
              y: {
                max: 4,
                ticks: {
                  stepSize: 1,
                  display: false,
                },
              },
            },
          }}
        />
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {statisticsInfos.map((el, index) => (
            <Box>
              <Typography
                style={{
                  color: index === 0 ? "#28DAC6" : "#5E5873",
                  fontSize: 26,
                  fontWeight: 600,
                  lineHeight: "31px",
                  fontFamily: "Montserrat",
                  marginBottom: "4px",
                }}
              >
                {el.number}
              </Typography>
              <Typography
                style={{
                  color: "#6E6B7B",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: "23px",
                  fontFamily: "Montserrat",
                }}
              >
                {el.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Grid>
  );
}

export default Statistics;
