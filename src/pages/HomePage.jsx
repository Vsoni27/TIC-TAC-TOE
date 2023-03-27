import React, { useState } from "react";
import GamePage from "./GamePage";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import socket from "../socket"



const HomePage = () => {
  const [showGameBox, setShowGameBox] = useState(false);
  const [loading, setloading] = useState(false);

  // const handleStartGame = () => {
  //   setShowGameBox(true);
  // };

  const handlePlay = ()=>{
    socket.connect();
    setloading(true);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: "#f0f0f0",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome to Tic-Tac-Toe!</h1>
        <p>Click the button below to start a new game.</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "500px",
          background: "#fff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          borderRadius: "5px",
          // backgroundImage: `url(${tictactoe.default})`,
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
        }}
      >
        <img
          src="https://i.etsystatic.com/33038059/r/il/f00801/3567497918/il_fullxfull.3567497918_jxad.jpg"
          alt="fdas"
          height="400px"
          width="300px"
        />
        {!loading && <Button variant="contained" sx={{ cursor: "pointer" }} onClick = {handlePlay}>
          Start Game
        </Button>}
        {loading && <LoadingButton
          size="small"
          //   onClick={handleClick}
          endIcon={<SendIcon />}
          loading="true"
          loadingPosition="end"
          variant="contained"
        >
          Connecting
        </LoadingButton>}
      </Box>
    </Box>
  );
};

export default HomePage;
