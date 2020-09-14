import { AGREGAR_POCIMA, QUITAR_POCIMA, CALCULAR_ATAQUE } from "./actionsTypes";

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

export const calcularAtaque = ataque => ({
  type: CALCULAR_ATAQUE,
  payload: {
    ataque
  }
});
