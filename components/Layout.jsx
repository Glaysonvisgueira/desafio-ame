import React from "react";
import Link from "next/link";

//Mui components
import Box from "@mui/material/Box";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        background: "#ccc",
      }}
    >
      {children}
    </Box>
  );
}
