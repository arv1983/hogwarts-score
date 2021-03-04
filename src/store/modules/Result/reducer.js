// const resultReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "ADD_NUMBER":
//       return state + action.number;

//     case "SUB_NUMBER":
//       return state - action.number;

//     default:
//       return state;
//   }
// };

// export default resultReducer;

const defaultState = [
  { escola: "Slytherin", nota: 200 },
  { escola: "Ravenclaw", nota: 300 },
  { escola: "Gryffindor", nota: 300 },
  { escola: "Hufflepuff", nota: 300 },
];

const resultReducer = (state = defaultState, action) => {
  console.log(action);
  console.log(action.type);
  console.log(action.escola);
  console.log(action.nota);
  switch (action.type) {
    case "ADD_NUMBER":
      console.log(action.escola);
      if (action.escola === "Slytherin") {
        state[0].nota = state[0].nota + action.nota;
      }

      if (action.escola === "Ravenclaw") {
        state[1].nota = state[1].nota + action.nota;
      }

      if (action.escola === "Gryffindor") {
        state[2].nota = state[2].nota + action.nota;
      }

      if (action.escola === "Hufflepuff") {
        state[2].nota = state[2].nota + action.nota;
      }

      return { ...state };
    case "SUB_NUMBER":
      if (action.escola === "Slytherin") {
        state[0].nota = state[0].nota - action.nota;
      }

      if (action.escola === "Ravenclaw") {
        state[1].nota = state[1].nota - action.nota;
      }

      if (action.escola === "Gryffindor") {
        state[2].nota = state[2].nota - action.nota;
      }

      if (action.escola === "Hufflepuff") {
        state[2].nota = state[2].nota - action.nota;
      }

      return { ...state };

    default:
      return state;
  }
};

export default resultReducer;
