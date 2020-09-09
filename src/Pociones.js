const Pociones = {

  CalcularDano: pociones => {
    let dano = 0;

    while (pociones > 0){

      switch(pociones){
        case 1:
          dano += 3;
          pociones -= 1;
        break;
        case 2: dano += 3; pociones -= 1; break;
        case 3: dano += 10; pociones -= 3; break;
        case 4: dano += 20; pociones -= 4; break;
        case 5: dano += 25; pociones -= 5; break;
        default: break;
      }

    }

    return dano;
  }
}

module.exports = Pociones;
