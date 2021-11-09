import { Box, Card, Typography } from "@mui/material";
import SignInButton from "../components/SignInButton";

const SignIn = ({ signInWithGoogle, ...props }) => {
  return (
    <Card
      sx={{
        width: 500,
        background: "#8ca4d4",
        p: 5,
        mt: 25,
        mx: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography sx={{ mb: 3 }} variant="h4">
          Sign in to start the demo
        </Typography>
        <SignInButton onClick={signInWithGoogle}>
          Sign in with Google
        </SignInButton>
      </Box>
    </Card>
  );
};

export default SignIn;
