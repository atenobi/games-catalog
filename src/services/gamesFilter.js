// js filters
import {
    dateFilter,
    ratingFilter,
    pegiRatingFilter,
    genreFilter,
    platformFilter,
    engineFilter,
    gameModeFilter,
  } from "../services/filters";

export const gamesFilter = (gamesArr, params) => {
    let result = [];
    let copy = [...gamesArr];

    let dateFiltered = [];
    let ratingFiltered = [];
    let ageRatingFiltered = [];
    let genresFiltered = [];
    let platformFiltered = [];
    let engineFiltered = [];
    let gameModesFiltered = [];

    dateFiltered = [...dateFilter(copy, params.gameReleasedate)];
    ratingFiltered = [...ratingFilter(dateFiltered, params.gameRating)];
    ageRatingFiltered = [...pegiRatingFilter(ratingFiltered, params.gamePegi)];
    genresFiltered = [...genreFilter(ageRatingFiltered, params.gameGenre)];
    platformFiltered = [...platformFilter(genresFiltered, params.gamePlatform)];
    engineFiltered = [...engineFilter(platformFiltered, params.gameEngine)];
    gameModesFiltered = [...gameModeFilter(engineFiltered, params.gameMode)];

    result = [...gameModesFiltered];
    return ([...result]);
  };