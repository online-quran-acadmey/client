import { Box } from "@chakra-ui/react";
import RegistrationForm from "../../components/Auth/RegistrationForm";

export default function Registration() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vh">
      <Box
        w="80%"
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
        <RegistrationForm />
      </Box>
    </Box>
  );
}
