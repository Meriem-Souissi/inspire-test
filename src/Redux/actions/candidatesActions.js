import { GET_CANDIDATES } from "./types";

function getCandidtes(candidates) {
  return {
    type: GET_CANDIDATES,
    payload: candidates,
  };
}
export default getCandidtes;
