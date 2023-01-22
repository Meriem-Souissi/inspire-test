import { GET_STATISTICS } from "./types";

function getStatistics(statistics) {
  return {
    type: GET_STATISTICS,
    payload: statistics,
  };
}
export default getStatistics;
