export const getGamesByName = async (name) => {
  let result = [];

  const queryParams = new URLSearchParams();
  queryParams.set(fields, 'id,name,release_dates.human,rating,age_ratings.rating,game_engines.name,summary,cover.url,genres.name,platforms.name,game_modes.name,url');
  queryParams.set(search, `${name}`);
  queryParams.set(limit, 500);
  
  await fetch(`https://eozcxj7i2j3mjjh.m.pipedream.net/games${queryParams.toString()}`, {
    method: "POST",
    headers: {
      "Client-ID": "r8ndcz4yox3p6e5ndgzrhlmbsharhk",
      authorization: "Bearer 19bj2thdtj93gj9en7lccpcz4hirsu",
    },
  })
    .then((response) => response.json())
    .then((data) => (result = data));

  return result;
};

// const saveParamsToUrl = (nameParam, valueParam, addressApi) => {
//   let myResultUrl = '';
//   const URlUserParams = new URLSearchParams();

//   URlUserParams.append(nameParam, valueParam);

//   myResultUrl = addressApi + URlUserParams.toString();
//   return myResultUrl;
// };

// export default saveParamsToUrl;