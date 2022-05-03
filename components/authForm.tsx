import { Box, Flex, Input, Button, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr"; //handles caching and optimistic update
import { auth } from "../lib/mutations";
import NextImage from "next/image";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bgGradient="linear(#006CBB, #F0ABD8)">
      <Flex justify="center" align="center" height="100px">
        <Box marginTop={40}>
          <NextImage src="/logo.png" width={160} height={160} />
        </Box>
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="white" borderRadius="12px" margin="5px">
          <Text align="center" fontSize="2xl">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              marginTop="10px"
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              marginTop="15px"
            />
            <Flex>
              <Button
                type="submit"
                width="80px"
                bg="green.400"
                isLoading={isLoading}
                sx={{
                  textColor: "white",
                  "&:hover": {
                    bg: "green.300",
                  },
                }}
                marginTop="15px"
                marginRight="20px"
              >
                {mode}
              </Button>
              <Center color="teal.400" paddingTop="20px" fontSize="small" h="50">
                <Link href={mode === "signin" ? "/signup" : "/signin"}>
                  {mode === "signin" ? "Create Account" : "Sign In"}
                </Link>
              </Center>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
