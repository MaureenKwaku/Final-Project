import { lazy } from "react";
import { OVERVIEW, ADMINS } from "./constants";

const Overview = lazy(() => import("../pages/dashboard"));
const Admins = lazy(() => import("../pages/admins"));

const routes = [
  {
    name: "Overview And Statistics",
    exact: true,
    component: Overview,
    path: OVERVIEW,
  },
  {
    name: "Manage Admins",
    exact: true,
    component: Admins,
    path: ADMINS,
  },
];

export default routes;
