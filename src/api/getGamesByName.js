import axios from "axios";

async function getProxies(n) {
  var options = {
    method: "GET",
    url: "https://ephemeral-proxies.p.rapidapi.com/v1/proxy",
    headers: {
      "x-rapidapi-host": "ephemeral-proxies.p.rapidapi.com",
      "x-rapidapi-key": "37cc2137c4mshe381a547fd72629p1dcd8cjsn19fd759ff090",
    },
  };
  let p = [];
  for (let i = 0; i < n; i++) {
    p.push(axios.request(options));
  }
  let responses = await Promise.allSettled(p);
  let successfullResponses = responses.filter((r) => {
    if (r.status === "fulfilled") {
      if (r.value.data.success) return true;
      console.warn(r.value.data);
    } else if (r.status === "rejected") {
      console.warn(r);
    }
    return false;
  });
  return successfullResponses.map((r) => r.value.data.proxy);
}

console.log(getProxies(5))

export const getGamesByName = async (name) => {
  // let result = [];

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
    proxIp,
    proxyPort,
    `https://api.igdb.com/v4/games/${JSON.stringify(queryParams)}`
  );

  // return result;
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
