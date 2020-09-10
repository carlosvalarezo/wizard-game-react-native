const CalcularDano = require("../src/Pociones.js")

test('retorna 3% dada 1 poción', () => {
  dano = CalcularDano(1);
  expect(dano).toBe(3)
})

test('retorna 6% dada 2 pociones', () => {
  dano = CalcularDano(2);
  expect(dano).toBe(6)
})

test('retorna 10% dada 5 pociones', () => {
  dano = CalcularDano(5);
  expect(dano).toBe(25)
})

test('retorna 28% dada 6 pociones', () => {
  dano = CalcularDano(6);
  expect(dano).toBe(28)
})

test('retorna 31% dada 7 pociones', () => {
  dano = CalcularDano(7);
  expect(dano).toBe(31)
})

test('retorna 50% dada 10 pociones', () => {
  dano = CalcularDano(10);
  expect(dano).toBe(50)
})
