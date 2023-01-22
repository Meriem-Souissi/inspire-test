import React, { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Icons
import { ReactComponent as CandidateIcon } from "assets/images/icons/dashboard icons/candidate-icon.svg";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

// Redux
import { useSelector, useDispatch } from "react-redux";
import getCandidtes from "Redux/actions/candidatesActions";

// db json
import dbJson from "../../../../db/db.json";

const CandidateButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  fontWeight: 500,
  padding: "4px 13px",
  lineHeight: "18px",
  backgroundColor: "#62A5FF",
  color: "#fff",
  borderRadius: 5,
  width: 174,
  minHeight: 10,
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

function Candidates() {
  const dispatch = useDispatch();
  const candidatesState = useSelector((state) => state.candidatesReducer);

  useEffect(() => {
    dispatch(getCandidtes(dbJson.candidates));
  }, []);
  return (
    <Grid item xs={12}>
      <Card sx={{ borderRadius: "7px", paddingRight: "30px", paddingTop: "26px" }}>
        <Box sx={{ marginLeft: "1%" }}>
          <CardTitle text="Candidats" />
        </Box>
        <Grid container sx={{ marginTop: "31px" }}>
          {candidatesState.candidates.map((el) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ paddingLeft: "1%", paddingBottom: "39px" }}
              key={el.id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  columnGap: "2%",
                  marginBottom: "38px",
                }}
              >
                <CandidateIcon />
                <div>
                  <Typography
                    style={{
                      color: "#5E5873",
                      fontSize: 26,
                      fontWeight: 600,
                      lineHeight: "32px",
                      fontFamily: "Montserrat",
                      marginBottom: "5px",
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
                      fontFamily: "Poppins",
                    }}
                  >
                    {el.desscription}
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <CandidateButton variant="contained">Voir les candidatures</CandidateButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Grid>
  );
}

export default Candidates;
