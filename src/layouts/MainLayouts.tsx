import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/CustomComponents/Navbar";
import Footer from "@/CustomComponents/Footer";

const MainLayout = () => {
    return (
        <Box minH="100vh" bg="background.500">
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default MainLayout;
