import { Redirect, useLocation } from "react-router";
import { ResultItemsPage } from "../../pages/ResultsItemsPage/results-items-page";

export function ResultsTemplate() {
  const location = useLocation();
  const queryParams = location.search;

  function searchQuery() {
    return new URLSearchParams(queryParams);
  }

  const querys = searchQuery();

  console.log("searchQuery, ", querys.get("q"));

  if (!querys.get("q")) {
    return <Redirect to="/" />;
  }

  return <ResultItemsPage />;
}
