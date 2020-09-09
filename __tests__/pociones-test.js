const pociones = require("../src/Pociones.js")

test('retorna 3% dada 1 poción', () => {
  dano = pociones.CalcularDano(1);
  expect(3).toBe(dano)
})

test('retorna 6% dada 2 pociones', () => {
  dano = pociones.CalcularDano(2);
  expect(6).toBe(dano)
})
