import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Container,
    Input,
    Checkbox,
    Separator,
} from "@chakra-ui/react";

const CreateAccount = () => {
    return (
        <Box bg="background.500" minH="100vh">
            {/* HEADER */}
            {/* <Box bg="primary.500" py={4}>
        <Container maxW="1100px">
          <Flex justify="space-between" align="center">
            <Heading size="md" color="white">
              Booking.com
            </Heading>

            <Flex gap={4}>
              <Button variant="outline" color="white" borderColor="white">
                Help
              </Button>
              <Button variant="outline" color="white" borderColor="white">
                INR
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box> */}

            {/* AUTH SECTION */}
            <Container maxW="1100px" py={16}>
                <Flex gap={12} align="stretch">
                    {/* LEFT INFO */}
                    <Box flex="1">
                        <Heading size="lg" mb={6}>
                            Create your Travelo.com account
                        </Heading>

                        <Flex direction="column" gap={6}>
                            <InfoItem
                                title="Manage all your bookings"
                                desc="View, change, or cancel your stays and trips in one place, anytime."
                            />
                            <InfoItem
                                title="Unlock Genius rewards"
                                desc="Get instant discounts, free perks, and special member-only deals."
                            />
                            <InfoItem
                                title="Secure and fast checkout"
                                desc="Save your details safely and check out faster on every future booking."
                            />
                        </Flex>
                    </Box>

                    {/* RIGHT FORM */}
                    <Box
                        w="420px"
                        bg="white"
                        p={8}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                    >
                        <Heading size="md" mb={2}>
                            Create account
                        </Heading>

                        <Text color="muted.500" mb={6} fontSize="sm">
                            Sign up using your email address or continue with one of the
                            options below.
                        </Text>

                        <FormField label="Full name" placeholder="John Doe" />
                        <FormField label="Email address" placeholder="name@example.com" />
                        <FormField label="Password" placeholder="••••••••" type="password" />
                        <FormField
                            label="Confirm password"
                            placeholder="••••••••"
                            type="password"
                        />


                        <Checkbox.Root mt={4} mb={4}>
                            <Checkbox.Control />
                            <Checkbox.Label>
                                Send me travel deals, personalized recommendations, and offers.
                            </Checkbox.Label>
                        </Checkbox.Root>


                        <Button
                            bg="primary.500"
                            color="white"
                            w="full"
                            mt={2}
                        >
                            Create account
                        </Button>
                        <Separator my={6}>                           
                        </Separator>
                        <Button w="full" variant="outline" mb={3}>
                            Continue with Google
                        </Button>

                      

                        <Text mt={6} fontSize="sm" textAlign="center" color="muted.500">
                            Already have an account?{" "}
                            <Box as="span" color="primary.500" fontWeight="600">
                                Sign in
                            </Box>
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default CreateAccount;
const InfoItem = ({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) => (
    <Flex gap={4}>
        <Box
            w="40px"
            h="40px"
            bg="secondary.500"
            borderRadius="full"
        />
        <Box>
            <Heading size="sm">{title}</Heading>
            <Text color="muted.500" fontSize="sm">
                {desc}
            </Text>
        </Box>
    </Flex>
);

const FormField = ({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) => (
    <Box mb={4}>
        <Text fontSize="sm" fontWeight="500" mb={1}>
            {label}
        </Text>
        <Input placeholder={placeholder} type={type} />
    </Box>
);
