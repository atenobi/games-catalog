import axios from "axios";

export const clientId = "r8ndcz4yox3p6e5ndgzrhlmbsharhk";
export const authorization = "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu";

let api = axios.create({
  headers: {
    "Client-ID": clientId,
    Authorization: authorization,
  },
});

export default api;

// "Client-secret": "1baxx31sye3i8e1j3nedmht1ddheb5"
// access_token: "19bj2thdtj93gj9en7lccpcz4hirsu"
// expires_in: 5544472
// token_type: "bearer"