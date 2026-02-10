import HomePages from "@/pages/HomePages";
import CreateAccount from "@/pages/CreateAccount";
import MainLayout from "@/layouts/MainLayouts";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePages /> },
            { path: "/signup", element: <CreateAccount /> },
            //   { path: "/login", element: <Login /> },
        ],
    },
    //   { path: "*", element: <NotFound /> },
];
