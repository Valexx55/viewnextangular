export class Imc {
  peso!: number;
  estatura!: number;
  imc!: number;
  imagen!: string;
  estado!: string;

  

  constructor(parampeso: number, paramestatura: number) {
    this.peso = parampeso;
    this.estatura = paramestatura;

    this.imc = this.peso / (this.estatura * this.estatura);
    //estilo js
    //this.imc = parseFloat(this.imc.toFixed(2));
    //hago casting al estilo TypeScript
    this.imc = +this.imc.toFixed(2); //convierto de string a número
    if (this.imc < 16) {
      //desnutrido
      this.estado = 'desnutrido';
      this.imagen = './assets/desnutricion.jpg';
    } else if (this.imc >= 16 && this.imc < 18) {
      //delgado
      this.estado = 'delgado';
      this.imagen = './assets/delgado.jpg';
    } else if (this.imc >= 18 && this.imc < 25) {
      //ideal
      this.estado = 'ideal';
      this.imagen = './assets/pesoideal.png';
    } else if (this.imc >= 25 && this.imc < 31) {
      //sobrepeso
      this.estado = 'sobrepeso';
      this.imagen = './assets/sobrepeso.jpg';
    } else {
      //obesidad
      this.estado = 'obeso';
      this.imagen = './assets/obesidad.jpg';
    }
  }

  
}
