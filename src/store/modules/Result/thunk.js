import { addNumber, subNumber } from "./actions";
//import { useSelector } from "react-redux";

export const addToCartThunk = (nota, escola) => (dispatch) => {
  //const resultado = useSelector((state) => state.result);
  console.log("thunk");
  const resultado = JSON.parse(localStorage.getItem("notas")) || [];
  console.log("thunk");
  localStorage.setItem("notas", JSON.stringify(resultado));
  dispatch(addNumber(nota, escola));
};

export const subToCartThunk = (nota, escola) => (dispatch) => {
  //const resultado = useSelector((state) => state.result);
  console.log("thunk");
  const resultado = JSON.parse(localStorage.getItem("notas")) || [];
  console.log("thunk");
  localStorage.setItem("notas", JSON.stringify(resultado));
  dispatch(subNumber(nota, escola));
};

// export const subToCartThunk = (product) => (dispatch) => {
//   const list = JSON.parse(localStorage.getItem("cart")) || [];
//   list.push(product);
//   console.log("thunk");
//   localStorage.setItem("cart", JSON.stringify(list));
//   dispatch(addToCart(product));
// };
