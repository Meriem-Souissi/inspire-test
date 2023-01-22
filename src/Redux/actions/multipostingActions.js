import { GET_MULTIPOSTING } from "./types";

function getMultiposting(multiposting) {
  return {
    type: GET_MULTIPOSTING,
    payload: multiposting,
  };
}
export default getMultiposting;
