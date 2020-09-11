const Pociones = require("../src/Pociones")



test('retorna 3% dada 1 poción', () => {
  dano = Pociones.CalcularDano(1);
  expect(dano).toBe(3)
})

test('retorna 6% dada 2 pociones', () => {
  dano = Pociones.CalcularDano(2);
  expect(dano).toBe(6)
})

test('retorna 13% dada 4 pociones', () => {
  dano = Pociones.CalcularDano(4);
  expect(dano).toBe(13)
})

test('retorna 10% dada 5 pociones', () => {
  dano = Pociones.CalcularDano(5);
  expect(dano).toBe(25)
})

test('retorna 28% dada 6 pociones', () => {
  dano = Pociones.CalcularDano(6);
  expect(dano).toBe(28)
})

test('retorna 31% dada 7 pociones', () => {
  dano = Pociones.CalcularDano(7);
  expect(dano).toBe(31)
})

test('retorna 50% dada 10 pociones', () => {
  dano = Pociones.CalcularDano(10);
  expect(dano).toBe(50)
})
