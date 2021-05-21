import { removeScore, addScore } from "./actions";

export const removeScoreThunk = (allHouses, house, score) => (dispatch) => {
  dispatch(removeScore((allHouses[house].score -= score)));
};

export const addScoreThunk = (allHouses, house, score) => (dispatch) => {
  dispatch(addScore((allHouses[house].score += score)));
};
