import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignInButton = ({ onClick, children, ...props }) => {
  return (
    <Button
      startIcon={<GoogleIcon />}
      color="error"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SignInButton;
