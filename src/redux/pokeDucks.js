import axios from "axios";
//constantes
const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const PREVIO_POKEMONES_EXITO = "PREVIO_POKEMONES_EXITO";
const POKE_INFO_EXITO = "POKE_INFO_EXITO";
//reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };
    case PREVIO_POKEMONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };
    case POKE_INFO_EXITO:
      return {
        ...state,
        unPokemon: action.payload,
      };
    default:
      return state;
  }
}
//acciones

export const unPokeDetalleAccion =
  (url = "https://pokeapi.co/api/v2/pokemon/1/") =>
  async (dispatch) => {
    //console.log(url);
    if (localStorage.getItem(url)) {
      console.log("desde localStorage");
      dispatch({
        type: POKE_INFO_EXITO,
        payload: JSON.parse(localStorage.getItem(url)),
      });
      return;
    }
    try {
      console.log("desde api");
      const res = await axios.get(url);
      console.log(res.data);
      dispatch({
        type: POKE_INFO_EXITO,
        payload: {
          nombre: res.data.name,
          ancho: res.data.weight,
          alto: res.data.height,
          foto: res.data.sprites.front_default,
        },
      });
      localStorage.setItem(
        url,
        JSON.stringify({
          ombre: res.data.name,
          ancho: res.data.weight,
          alto: res.data.height,
          foto: res.data.sprites.front_default,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  if (localStorage.getItem("offset=0")) {
    console.log("datos guardados");
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
    return;
  }
  try {
    console.log("datos desde la api");
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
    );
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem("offset=0", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const siguientePokemonAccion = () => async (dispatch, getState) => {
  //primera alternativa
  //const offset = getState().pokemones.offset;
  //const siguiente = offset + numero;
  const next = getState().pokemones.next;
  if (localStorage.getItem(next)) {
    console.log("datos guardados");
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(next)),
    });
    return;
  }

  try {
    console.log("datos desde la api");
    const res = await axios.get(next);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem(next, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const previous = getState().pokemones.previous;
  if (localStorage.getItem(previous)) {
    console.log("datos guardados");
    dispatch({
      type: PREVIO_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
    return;
  }

  try {
    console.log("datos desde la api");
    const res = await axios.get(previous);
    dispatch({
      type: PREVIO_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem(previous, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
