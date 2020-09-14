const Pociones = require("../src/Pociones")


test('retorna 0% dada 0 poción', () => {
  const pociones = []

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(0)
})


test('retorna 3% dada 1 poción de 1 color', () => {
  const pociones = [{color:'blue', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(3)
})

test('retorna 6% dada 2 pociones del mismo color', () => {
  const pociones = [{color:'blue', numero:2}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(6)
})

test('retorna 9% dada 3 pociones del mismo color', () => {
  const pociones = [{color:'blue', numero:3}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(9)
})

test('retorna 6% dada 2 pociones 1 blue y 1 red ', () => {
  const pociones = [{color:'blue', numero:1}, {color:'red', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(6)
})

test('retorna 9% dada 3 pociones 2 blue y 1 red ', () => {
  const pociones = [{color:'blue', numero:2}, {color:'red', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(9)
})

test('retorna 10% dada 3 pociones 1 blue 1 red 1 green ', () => {
  const pociones = [{color:'blue', numero:1}, {color:'red', numero:1}, {color:'green', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(10)
})

test('retorna 12% dada 4 pociones 2 blue y 1 red ', () => {
  const pociones = [{color:'blue', numero:2}, {color:'red', numero:2}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(12)
})

test('retorna 10% dada 3 pociones 1 blue, 1 red y 1 yellow ', () => {
  const pociones = [{color:'blue', numero:1}, {color:'red', numero:1}, {color:'yellow', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(10)
})

test('retorna 13% dada 3 pociones 2 blue, 1 red y 1 yellow ', () => {
  const pociones = [{color:'blue', numero:2}, {color:'red', numero:1}, {color:'yellow', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(13)
})

test('retorna 20% dada 4 pociones 1 blue, 1 red, 1 yellow, 1 green ', () => {
  const pociones = [{color:'blue', numero:1}, {color:'red', numero:1}, {color:'yellow', numero:1}, {color:'green', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(20)
})

test('retorna 25% dada 5 pociones 1 blue, 1 red, 1 yellow, 1 green, 1 gray ', () => {
  const pociones = [{color:'blue', numero:1}, {color:'red', numero:1}, {color:'yellow', numero:1}, {color:'green', numero:1}, {color:'gray', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(25)
})

test('retorna 28% dada 5 pociones 2 blue, 1 red, 1 yellow, 1 green, 1 gray ', () => {
  const pociones = [{color:'blue', numero:2}, {color:'red', numero:1}, {color:'yellow', numero:1}, {color:'green', numero:1}, {color:'gray', numero:1}]

  dano = Pociones.CalcularDano(pociones);
  expect(dano).toBe(28)
})
