import { RootTemplate } from "../components/templates/rootTemplate";
import { ResultsTemplate } from "../components/templates/resultsTemplate/index";
import { DetailItem } from "../components/templates/detailItemTemplate/index";

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
    component: DetailItem,
  },
];
