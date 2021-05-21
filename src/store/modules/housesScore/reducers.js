export const ScoreHandler = (
  state = {
    Slytherin: { name: "Slytherin", score: 500 },
    Ravenclaw: { name: "Ravenclaw", score: 500 },
    Gryffindor: { name: "Gryffindor", score: 500 },
    Hufflepuff: { name: "Hufflepuff", score: 500 },
  },
  action
) => {
  let { results } = action;
  switch (action.type) {
    case "REMOVE_SCORE":
      return { ...state, ...results };

    case "ADD_SCORE":
      return { ...state, ...results };

    default:
      return state;
  }
};
