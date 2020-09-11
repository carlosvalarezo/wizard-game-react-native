import { AGREGAR_POCIMA, QUITAR_POCIMA } from "./actionsTypes";

export const agregarPocima = pocima => ({
  type: AGREGAR_POCIMA,
  payload: {
    color: pocima.color,
    numero: pocima.numero
  }
});

export const quitarPocima = pocima => ({
  type: QUITAR_POCIMA,
  payload: {
    color: pocima.color,
    numero: pocima.numero
  }
});
