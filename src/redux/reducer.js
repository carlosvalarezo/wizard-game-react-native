import { AGREGAR_POCIMA, QUITAR_POCIMA } from "./actionsTypes";

const initialState = {
  pocimas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_POCIMA:
    case QUITAR_POCIMA:
      const { color, numero } = action.payload;
      let copyPocimas = state.pocimas;
      const pocimaActual = copyPocimas.filter(poc => poc.color === color);
      if (pocimaActual.length === 0){
        return {
          ...state,
          pocimas: [...state.pocimas, { color, numero }]
        };
      }
      const inversePocima = copyPocimas.filter(poc => poc.color !== color);
      const nuevaPocima = {color: pocimaActual[0].color, numero}
      if (inversePocima.length === 0){
        return {
          ...state,
          pocimas: [nuevaPocima]
        };
      }
      return {
        ...state,
        pocimas: [...inversePocima, nuevaPocima]
      };
    default:
      return state;
    }
}
