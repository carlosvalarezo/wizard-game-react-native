export function CalcularDano(pociones){

  let ataques = []
  if (pociones.length === 0) return 0;

    let pocionesTotales = pociones.reduce((total, pocion) => total + pocion.numero, 0);
    let colores = pociones.length;
    let pocimasGastadas = 0;
    let pocionesRestantes = pociones.reduce((total, pocion) => total + pocion.numero, 0);
    let dano = 0;

    while(pocimasGastadas !== pocionesTotales){
      pociones = pociones.map(pocion => {
        const { color } = pocion;
        let { numero } = pocion;

        if(numero !== 0){
          pocimasGastadas++;
          numero -= 1;
          return {color, numero};
        }
        if (numero === 0){
          colores--;
        }
        return {color, numero};
      });
      pocionesRestantes = pociones.reduce((total, pocion) => total + pocion.numero, 0);
      if(colores === 1 ){
          ataques.push({dano: 3})
      }
      if(colores === 2 ){
          ataques.push({dano: 3});
          ataques.push({dano: 3});
      }
      if(colores === 3 ){
          ataques.push({dano: 10});
      }
      if(colores === 4 ){
          ataques.push({dano: 20});
      }
      if(colores === 5 ){
          ataques.push({dano: 25});
      }


    }
  return Math.round(ataques.reduce((total, ataque) => total + ataque.dano, 0));




}
