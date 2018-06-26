import { Injectable } from '@angular/core';

@Injectable()
export class guitarsService {

  private guitars:Guitar[] = [
   {
     name: "PLAYER STRATOCASTER® PLUS TOP",
     description: "El sonido inspirador de una Stratocaster es uno de los fundamentos de Fender. Con este clásico sonido de agudos campanilleantes, medios pronunciados y bajos robustos, combinados con una articulación cristalina, la Player Stratocaster Plus Top está repleta de auténtico estilo y sensación Fender. Está lista para hacer realidad tus ideas musicales, es lo suficientemente versátil para cualquier estilo de música y es la plataforma perfecta para crear tu propio sonido.",
     img: "assets/img/fenderelectric.png",
     strings: "Guitarra Electrica",
     brand:"Fender"
   },
   {
     name: "PLAYER TELECASTER® HH",
     description: "Perfecta para una mayor potencia musical, la Player Telecaster HH es una auténtica Fender, de principio a fin. La sensación, el estilo y, lo más importante, el sonido: lo tiene todo, esperando que la utilices para hacer tu música. Lo suficientemente versátil para casi cualquier cosa que puedas crear y lo suficientemente resistente como para sobrevivir a cualquier concierto, esta herramienta musical es una fiel compañera en tu viaje musical.",
     img: "assets/img/fendertelecaster.png",
     strings: "Guitarra Electrica",
     brand:"Fender"
   },
   {
     name: "ERIC JOHNSON SIGNATURE STRATOCASTER® THINLINE",
     description: "Dando vida a la visión de uno de los guitarristas más respetados del mundo, la Eric Johnson Signature Stratocaster Thinline es el matrimonio perfecto entre un cuerpo semi-hueco y una Stratocaster tradicional. Johnson es famoso en los círculos de la guitarra por buscar su tono fluido y articulado, y esta guitarra complementa perfectamente el estilo de interpretación que le valió su lugar en el moderno panteón de guitarra. En 2015, se nos acercó para codiseñar un instrumento liviano y resonante que combina los tonos de sus guitarras semi-huecas favoritas y su Stratocaster. Dos años más tarde, llegamos a la fórmula del nirvana tonal con la Eric Johnson Signature Stratocaster Thinline.",
     img: "assets/img/fenderelectric2.png",
     strings: "Guitarra Electrica",
     brand:"Fender"
   },
   {
     name: "CT-60S",
     description: "La guitarra CT-60S Travel Body deriva de la forma Auditorio que ha sido diseñada para ofrecer una nueva forma: Travel. Su tamaño reducido y compacto la convierte en el instrumento perfecto para llevar a donde quiera que vayas.",
     img: "assets/img/schecteracoustic.png",
     strings: "Guitarra Acustica",
     brand:"Fender"
   },
   {
     name: "DR-100®",
     description: "La DR-100 ha sido durante mucho tiempo la guitarra acústica más vendida de Epiphone. El DR-100 tiene la apariencia, el sonido y la calidad de construcción que los aficionados y profesionales esperan encontrar cuando adquieren un Epiphone. ",
     img: "assets/img/epiphoneacoustic.png",
     strings: "Guitarra Acustica",
     brand:"Epiphone"
   },
   {
     name: "Masterbilt Century Olympic",
     description: "Los primeros archtops de Masterbilt de Epiphone se volvieron rápidamente populares durante la era de la Big Band de los años 30 y fueron reconocidos por su cálido tono de madera, su amplio rango tonal y su potente volumen. Sin embargo, con la invención de la pastilla de guitarra eléctrica, las guitarras acústicas Archtop rápidamente se equiparon con amplificación magnética y, en su mayor parte, se transformaron para siempre en guitarras eléctricas.",
     img: "assets/img/epiphone2.png",
     strings: "Guitarra Electrica",
     brand:"Epiphone"
   },
   {
     name: "C-1 SLS Elite",
     description: "Perfecta para una mayor potencia musical, la Player Telecaster HH es una auténtica Fender, de principio a fin. La sensación, el estilo y, lo más importante, el sonido: lo tiene todo, esperando que la utilices para hacer tu música. Lo suficientemente versátil para casi cualquier cosa que puedas crear y lo suficientemente resistente como para sobrevivir a cualquier concierto, esta herramienta musical es una fiel compañera en tu viaje musical.",
     img: "assets/img/schecterelectric.png",
     strings: "Guitarra Electrica",
     brand:"Schecter"
   }
 ];

  constructor() {
  console.log("Servicio listo para usar");
  }

  getGuitars():Guitar[] {
    return this.guitars;
  }


}


export interface Guitar {
    name: string,
    description: string,
    img: string,
    strings: string,
    brand: string
}
