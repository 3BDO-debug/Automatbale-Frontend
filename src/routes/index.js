import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import LogoOnlyLayout from "src/layouts/LogoOnlyLayout";
// layouts

// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/auth",
      element: <LogoOnlyLayout />,
      children: [{ path: "signin", element: <SignInPage /> }],
    },
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const SignInPage = Loadable(lazy(() => import("../pages/authPages/SignIn")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
