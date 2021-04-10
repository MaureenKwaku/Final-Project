import { lazy } from "react";
import { OVERVIEW, ADMINS, USERS } from "./constants";

const Overview = lazy(() => import("../pages/dashboard"));
const Admins = lazy(() => import("../pages/admins"));
const Users = lazy(() => import("../pages/users"));

const routes = [
  {
    name: "Overview And Statistics",
    exact: true,
    component: Overview,
    path: OVERVIEW,
  },
  {
    name: "Manage Users",
    exact: true,
    component: Users,
    path: USERS,
  },
  {
    name: "Manage Admins",
    exact: true,
    component: Admins,
    path: ADMINS,
  },
];

export default routes;
