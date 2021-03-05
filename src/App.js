import React, { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import Slytherin from "./img/escola1.png";
import Ravenclow from "./img/escola2.png";
import Gryffindor from "./img/escola3.png";
import Hufflepuff from "./img/escola4.png";
import Nota from "./img/nota.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "./store/modules/Result/actions";
import { connect } from "react-redux";

///
import { addToCartThunk, subToCartThunk } from "./store/modules/Result/thunk";

function App() {
  const [dados, setDados] = useState({});
  const resultado = useSelector((state) => state.result);

  const dispatch = useDispatch();
  connect(resultado);
  console.log("RESULTADO" + JSON.stringify(resultado));
  localStorage.setItem("notas", JSON.stringify(resultado));
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hp-api.herokuapp.com/api/characters/students"
      );
      setDados(result);
      console.log(result.data);
    };

    fetchData();
  }, []);

  function fecha() {
    console.log("fecha div");
    document.getElementById("pop").style.display = "none";
  }

  function click(x) {
    render(
      <div id="pop">
        <div>
          <img
            src={dados.data[x].image}
            alt={dados.data[x].name}
            width="180px"
            height="230px"
          />
        </div>
        <div className="div_add_pontos">
          {dados.data[x].house}
          <br />
          {dados.data[x].name}

          <font size="2" face="Verdana" color="#0000FF" onClick={() => fecha()}>
            [X]
          </font>
          <input name="valor" id="valor2" type="number"></input>
          <br />
          <button
            onClick={() =>
              dispatch(
                addToCartThunk(
                  parseFloat(document.getElementById("valor2").value),
                  dados.data[x].house
                )
              )
            }
          >
            Gain
          </button>
          <button
            onClick={() =>
              dispatch(
                subToCartThunk(
                  parseFloat(document.getElementById("valor2").value),
                  dados.data[x].house
                )
              )
            }
          >
            Lose
          </button>
        </div>
      </div>
    );
  }
  console.log(resultado);
  return (
    <>
      {/*
      //document.getElementById("pop").style.display = "block";
      <div id="pop">
        <tr>
          <td>
            <font size="2" face="Verdana" color="#0000FF">
              Fechar[X]
            </font>
          </td>
        </tr>
      
    </div> */}
      <div className="escolas">
        <div className="card_escolas_posicao">1# Lugar</div>

        <div className="card_escolas_posicao">2# Lugar</div>

        <div className="card_escolas_posicao">3# Lugar</div>

        <div className="card_escolas_posicao">4# Lugar</div>
      </div>
      <div className="escolas">
        <div className="card_escolas" style={{ order: -resultado[0].nota }}>
          {resultado[0].escola}
          <img src={Slytherin} width="85%" height="70%" alt="Slytherin" />
          <font style={{ fontSize: "4vw" }}>{resultado[0].nota}</font>
        </div>

        <div className="card_escolas" style={{ order: -resultado[1].nota }}>
          {resultado[1].escola}
          <img src={Ravenclow} width="85%" height="70%" alt="Ravenclow" />

          <font style={{ fontSize: "4vw" }}>{resultado[1].nota}</font>
        </div>

        <div className="card_escolas" style={{ order: -resultado[2].nota }}>
          {resultado[2].escola}
          <img src={Gryffindor} width="85%" height="70%" alt="Gryffindor" />
          <font style={{ fontSize: "4vw" }}>{resultado[2].nota}</font>
        </div>

        <div className="card_escolas" style={{ order: -resultado[3].nota }}>
          {resultado[3].escola}
          <img src={Hufflepuff} width="85%" height="70%" alt="Hufflepuff" />
          <font style={{ fontSize: "4vw" }}>{resultado[3].nota}</font>
        </div>
      </div>
      <br />
      <div className="alunos">
        <h2>Alunos</h2>
        {dados.data
          ? dados.data.map((name, index) => {
              return (
                <>
                  <div className="nome-alunos">
                    <div style={{ width: "40%" }}>{dados.data[index].name}</div>
                    <div style={{ width: "40%" }}>
                      {dados.data[index].house}
                    </div>
                    <div style={{ width: "10%" }} onClick={() => click(index)}>
                      <img src={Nota} alt="editar" width="30vw" />
                    </div>
                  </div>

                  <hr />
                </>
              );
            })
          : "carregando"}
      </div>
    </>
  );
}

export default App;
