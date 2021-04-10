import { lazy } from "react";
import { OVERVIEW, ADMINS, USERS, CARS, SETTINGS } from "./constants";

const Overview = lazy(() => import("../pages/dashboard"));
const Admins = lazy(() => import("../pages/admins"));
const Users = lazy(() => import("../pages/users"));
const Cars = lazy(() => import("../pages/cars"));
const Settings = lazy(() => import("../pages/account-settings"));

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
    name: "Manage Cars",
    exact: true,
    component: Cars,
    path: CARS,
  },
  {
    name: "Manage Admins",
    exact: true,
    component: Admins,
    path: ADMINS,
  },
  {
    name: "Account Settings",
    exact: true,
    component: Settings,
    path: SETTINGS,
  },
];

export default routes;
