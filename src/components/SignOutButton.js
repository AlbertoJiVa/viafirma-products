import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const SignOutButton = ({ onClick, children, ...props }) => {
  return (
    <Button
      startIcon={<LogoutIcon />}
      color="error"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SignOutButton;
