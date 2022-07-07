import axios from "axios";

export async function getProxies(n) {
  let  result = [];
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
  result = successfullResponses.map((r) => r.value.data.proxy);
  return result.json();
}
