import HomePages from "@/pages/HomePages";
import CreateAccount from "@/pages/CreateAccount";
import MainLayout from "@/layouts/MainLayouts";
import LoginPage from "@/pages/LoginPage";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePages /> },
            { path: "/signup", element: <CreateAccount /> },
            { path: "/login", element: < LoginPage /> },
            //   { path: "/login", element: <Login /> },
        ],
    },
    //   { path: "*", element: <NotFound /> },
];
