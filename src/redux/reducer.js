import { AGREGAR_POCIMA, QUITAR_POCIMA } from "./actionsTypes";

const initialState = {
  pocimas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_POCIMA:
      const { color, numero } = action.payload;
      console.log("color: ", color, "numero: ", numero);
      console.log("pocimas: ",  state.pocimas);
      // const otrasPocimas = state.pocimas.filter((pocima, index) => pocima.color !== color);
      return {
        ...state,
        pocimas: {color, numero}
      };
    default:
      return state;
    }
}
