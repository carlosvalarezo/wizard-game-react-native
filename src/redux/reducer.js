import { AGREGAR_POCIMA, QUITAR_POCIMA } from "./actionsTypes";

const initialState = {
  pocimas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_POCIMA:
      const { color, numero } = action.payload;
      console.log("pocimas..", state.pocimas);
      let copyPocimas = state.pocimas;
      console.log("copyPocimas..", state.pocimas);
      const pocimaActual = copyPocimas.filter(poc => poc.color === color);

      console.log("pocimaActual..", pocimaActual);
      if (pocimaActual.length === 0){
        return {
          ...state,
          pocimas: [...state.pocimas, { color, numero }]
        };
      }
      const inversePocima = copyPocimas.filter(poc => poc.color !== color);
      console.log("pocimaActual con valor..", pocimaActual);
      const nuevaPocima = {color: pocimaActual[0].color, numero}
      console.log("nuevaPocima..", nuevaPocima);
      console.log("estado con valores;;;;..", state.pocimas);
      if (inversePocima.length === 0){
        return {
          ...state,
          pocimas: [nuevaPocima]
        };
      }
      return {
        ...state,
        pocimas: [inversePocima, nuevaPocima]
      };


    default:
      return state;
    }
}
