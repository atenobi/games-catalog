import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "r8ndcz4yox3p6e5ndgzrhlmbsharhk",
    Authorization: "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu",
  },
});

export default api;

// "Client-secret": "1baxx31sye3i8e1j3nedmht1ddheb5"
// access_token: "19bj2thdtj93gj9en7lccpcz4hirsu"
// expires_in: 5544472
// token_type: "bearer"