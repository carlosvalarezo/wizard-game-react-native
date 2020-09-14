import { AGREGAR_POCIMA, QUITAR_POCIMA, CALCULAR_ATAQUE } from "./actionsTypes";

const initialState = {
  pocimas: [],
  ataque: 0,
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
    case CALCULAR_ATAQUE:
    const {ataque} = action.payload;
      return {
        ...state,
        ataque
      };
    default:
      return state;
    }

}
