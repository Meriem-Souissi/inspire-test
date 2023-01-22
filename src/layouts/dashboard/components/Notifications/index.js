import React, { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Icons
import { ReactComponent as ArrowRightCircleIcon } from "assets/images/icons/dashboard icons/arrow-right-circle.svg";
import { ReactComponent as Dot1Icon } from "assets/images/icons/dashboard icons/dot-1.svg";
import { ReactComponent as Dot2Icon } from "assets/images/icons/dashboard icons/dot-2.svg";
import { ReactComponent as Dot3Icon } from "assets/images/icons/dashboard icons/dot-3.svg";
import { ReactComponent as Dot4Icon } from "assets/images/icons/dashboard icons/dot-4.svg";

// Dashboard components
import CardTitle from "layouts/dashboard/components/CardTitle";

// Redux
import { useSelector, useDispatch } from "react-redux";
import getNotifications from "Redux/actions/notificationsActions";

// db json
import dbJson from "../../../../db/db.json";

function Notifications() {
  const dispatch = useDispatch();
  const notificationsState = useSelector((state) => state.notificationsReducer);

  useEffect(() => {
    dispatch(getNotifications(dbJson.notifications));
  }, []);
  const MultipostingButton = styled(Button)({
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
  function getIcon(index) {
    switch (index) {
      case 0:
        return <Dot1Icon />;
      case 1:
        return <Dot2Icon />;
      case 2:
        return <Dot3Icon />;
      case 3:
        return <Dot4Icon />;
      default:
        return <Dot1Icon />;
    }
  }
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
        <CardTitle text="Notifications" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {notificationsState.notifications.map((el, index) => (
            <Box
              key={el.id}
              sx={{
                position: "relative",
                borderLeft: "1.09px solid #EBE9F1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingLeft: "4%",
                paddingBottom: "12px",
              }}
            >
              <div style={{ position: "absolute", top: "0px", left: "-11px" }}>
                {getIcon(index)}
              </div>
              <div>
                <Typography
                  style={{
                    color: "#5E5873",
                    fontSize: 15,
                    fontWeight: 500,
                    lineHeight: "25px",
                    fontFamily: "Montserrat",
                    marginBottom: "4px",
                  }}
                >
                  {el.text}
                </Typography>
                <Typography
                  style={{
                    color: "#6E6B7B",
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: "25px",
                    fontFamily: "Montserrat",
                  }}
                >
                  {el.notification}
                </Typography>
              </div>

              <div>
                <Typography
                  style={{
                    color: "#A8A8A8",
                    fontSize: 13,
                    fontWeight: 400,
                    lineHeight: "20px",
                    fontFamily: "Poppins",
                  }}
                >
                  {el.date}
                </Typography>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <ArrowRightCircleIcon />
                </div>
              </div>
            </Box>
          ))}

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <MultipostingButton variant="contained">Voir les annonces</MultipostingButton>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default Notifications;
