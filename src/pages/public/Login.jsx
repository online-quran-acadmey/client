import { Box } from "@chakra-ui/react";
import LoginForm from "../../components/Auth/LoginForm";

export const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vh">
      <Box
        w={{ base: "100%", md: "50%", lg: "35%" }}
        boxShadow="dark-lg"
        p={5}
        borderRadius={"md"}
        transition="all 0.3s ease-in-out"
        sx={{
          animation: "fadeIn 0.8s ease-in-out",
          "@keyframes fadeIn": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}>
        <LoginForm />
      </Box>
    </Box>
  );
};
