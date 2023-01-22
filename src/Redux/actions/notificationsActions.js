import { GET_NOTIFICATIONS } from "./types";

function getNotifications(notifications) {
  return {
    type: GET_NOTIFICATIONS,
    payload: notifications,
  };
}
export default getNotifications;
