// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { setMode } from "state";
import { useDispatch } from "react-redux";
import FlexBetween from "components/FlexBetween";
import {
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <FlexBetween gap="2rem">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
             
        </Typography>
        <Typography fontWeight="bold" fontSize="32px" color="primary">
             
        </Typography>
        
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Quick Share
        </Typography>
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>

          <Typography fontWeight="bold" fontSize="32px" color="primary">
             
          </Typography>
        </FlexBetween>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Quick Share
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
