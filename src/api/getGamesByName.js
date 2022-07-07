import axios from "axios";
import { getProxies } from "@/services/getProxies";


export const getGamesByName = async (name) => {
  let result = [];

  const proxyAnswer = getProxies(1)[0];

  const queryParams = {
    headers: {
      "Client-ID": "r8ndcz4yox3p6e5ndgzrhlmbsharhk",
      authorization: "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu",
    },
    body: `fields id, name, release_dates.human, rating, age_ratings.rating, game_engines.name, summary, cover.url, genres.name, platforms.name, game_modes.name, url;
          search "${name}";
          limit 500;`,
  };

  async function hitTarget(proxIp, proxyPort, targetUrl) {
    let agent = new httpsProxyAgent(`http://${proxIp}:${proxyPort}`);
    let options = {
      httpsAgent: agent,
      method: "GET",
      url: targetUrl,
    };
    return axios.request(options);
  }

  hitTarget(
    proxyAnswer.id,
    proxyAnswer.port,
    `https://api.igdb.com/v4/games/${JSON.stringify(queryParams)}`
  );

  return result;
};

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://scrapers-proxy2.p.rapidapi.com/standard',
//   params: {url: 'https://api.igdb.com/v4/games/'},
//   headers: {
//     'X-RapidAPI-Key': '37cc2137c4mshe381a547fd72629p1dcd8cjsn19fd759ff090',
//     'X-RapidAPI-Host': 'scrapers-proxy2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
