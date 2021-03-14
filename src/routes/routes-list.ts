import { DetailItemTemplate } from "../components/templates/detailItemTemplate/index";
import { ResultsTemplate } from "../components/templates/resultsTemplate/index";
import { RootTemplate } from "../components/templates/rootTemplate";

export const routes = [
  {
    exact: true,
    path: "/",
    component: RootTemplate,
  },
  {
    exact: true,
    path: "/items",
    component: ResultsTemplate,
  },
  {
    exact: true,
    path: "/items/:id",
    component: DetailItemTemplate,
  },
];
