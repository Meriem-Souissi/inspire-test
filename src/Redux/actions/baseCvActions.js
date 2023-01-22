import { GET_BASE_CV } from "./types";

function getBase(base) {
  return {
    type: GET_BASE_CV,
    payload: base,
  };
}
export default getBase;
