import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import { useNavigate, useRoutes } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box bg="#0664b1" color="white">
            <Flex
                maxW="1100px"
                mx="auto"
                px={4}
                py={3}
                direction={{ base: "column", md: "row" }}
                align={{ base: "flex-start", md: "center" }}
                justify="space-between"
                gap={{ base: 3, md: 0 }}
            >
                <Box fontSize="xl" fontWeight="bold">
                    Travelo.com
                </Box>
                {/* <Image
                    src={travelo}
                    alt="Logo"
                    height="40px"
                    objectFit="cover"
                /> */}

                <Flex
                    gap={3}
                    wrap="wrap"
                    justify={{ base: "flex-start", md: "flex-end" }}
                >
                    <Button size="sm" variant="ghost" color="white">
                        INR
                    </Button>
                    <Box
                        w="32px"
                        h="32px"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="https://i.pravatar.cc/100"
                            alt="User"
                            objectFit="cover"
                        />
                    </Box>

                    <Button size="sm" variant="ghost" color="white">
                        List your property
                    </Button>
                    <Button size="sm" bg="white" color="#0664b1" onClick={() => navigate('/signup')}>
                        Sign in / Register
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};
