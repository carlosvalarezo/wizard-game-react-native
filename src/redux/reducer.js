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
      if (pocimaActual.length === 0 && numero !== 0){
        return {
          ...state,
          pocimas: [...state.pocimas, { color, numero }]
        };
      }
      const otrasPocimas = copyPocimas.filter(poc => poc.color !== color && poc.numero !== 0);
      const nuevaPocima = {color: pocimaActual[0].color, numero}
      if(numero !== 0){
        return {
          ...state,
          pocimas: [...otrasPocimas, nuevaPocima]
        };
      }
      return {
        ...state,
        pocimas: [...otrasPocimas]
      };
    default:
      return state;
    }
}
