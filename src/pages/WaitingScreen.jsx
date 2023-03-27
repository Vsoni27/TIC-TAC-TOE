import { Box, CircularProgress } from "@mui/material";

const WaitingScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage:
          "url(https://c8.alamy.com/comp/2G3KD67/illustration-of-hand-drawn-tic-tac-toe-competition-2G3KD67.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // filter: 'blur(5px)',
      }}
    >
      <Box
        sx={{
            height: "100%",
            width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        //   backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(15px)",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <CircularProgress color="primary" size={60} />
        <h1 style={{ margin: "1rem" }}>Waiting for other players...</h1>
      </Box>
    </Box>
  );
};

export default WaitingScreen;
