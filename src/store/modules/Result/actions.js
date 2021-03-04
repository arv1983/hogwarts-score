console.log("addNUMER");
export const addNumber = (nota, escola) => ({
  type: "ADD_NUMBER",
  escola: escola,
  nota: nota,
});

export const subNumber = (nota, escola) => ({
  type: "SUB_NUMBER",
  escola: escola,
  nota: nota,
});

//ADDS
export const Slytherin_Add = (number) => ({
  type: "ADD_NUMBER_Slytherin",
  number,
});
export const Ravenclow_Add = (number) => ({
  type: "ADD_NUMBER_Ravenclow",
  number,
});
export const Gryffindor_Add = (number) => ({
  type: "ADD_NUMBER_Gryffindor",
  number,
});
export const Hufflepuff_Add = (number) => ({
  type: "ADD_NUMBER_Hufflepuff",
  number,
});

//SUBS
export const Slytherin_Sub = (number) => ({
  type: "SUB_NUMBER_Slytherin",
  number,
});
export const Ravenclow_Sub = (number) => ({
  type: "SUB_NUMBER_Ravenclow",
  number,
});
export const Gryffindor_Sub = (number) => ({
  type: "SUB_NUMBER_Gryffindor",
  number,
});
export const Hufflepuff_Sub = (number) => ({
  type: "SUB_NUMBER_Hufflepuff",
  number,
});
