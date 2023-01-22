import React, { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Icons
import { ReactComponent as ChevronDownIcon } from "assets/images/icons/dashboard icons/chevron-down.svg";

// Charts
import { Line } from "react-chartjs-2";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

// Redux
import { useSelector, useDispatch } from "react-redux";
import getBase from "Redux/actions/baseCvActions";

// db json
import dbJson from "../../../../db/db.json";

function BaseCV() {
  const dispatch = useDispatch();
  const baseState = useSelector((state) => state.baseReducer);

  useEffect(() => {
    dispatch(getBase(dbJson.lineChart));
  }, []);
  const maxValue = Math.max(...baseState.base);

  const BaseButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 15,
    fontWeight: 500,
    padding: "11px 24px",
    lineHeight: "22px",
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
                data: baseState.base,
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
                max: maxValue * 1.3,
                beginAtZero: true,
                ticks: {
                  stepSize: 50,
                },
              },
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
          <BaseButton variant="contained">Trouver un profil</BaseButton>
        </Box>
      </Card>
    </Grid>
  );
}

export default BaseCV;
