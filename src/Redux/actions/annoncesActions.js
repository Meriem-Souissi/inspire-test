import { GET_ANNONCES } from "./types";

function getAnnonces(annonces) {
  return {
    type: GET_ANNONCES,
    payload: annonces,
  };
}
export default getAnnonces;
