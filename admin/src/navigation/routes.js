import { lazy } from "react";
import { OVERVIEW } from "./constants";

const Overview = lazy(() => import("../pages/dashboard"));

const routes = [
  {
    name: "Overview And Statistics",
    exact: true,
    component: Overview,
    path: OVERVIEW,
  },
];

export default routes;
