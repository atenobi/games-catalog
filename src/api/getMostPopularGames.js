import api from "./axios";

export const getMostPopularGames = async () => {
    let result = [];

    await api.get("https://api.twitch.tv/helix/games/top")
    .then((res)=> {
        result = res.data.data
    })

    return result;
  };