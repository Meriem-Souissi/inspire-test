import React from "react";

// @mui material components
import Typography from "@mui/material/Typography";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function CardTitle({ text }) {
  return (
    <Typography
      style={{
        color: "#5E5873",
        fontSize: 20,
        fontWeight: 500,
        lineHeight: "24px",
        fontFamily: "Montserrat",
        marginBottom: "26px",
      }}
    >
      {text}
    </Typography>
  );
}

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardTitle;
