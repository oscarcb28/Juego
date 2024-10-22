export class Personaje {

    imagen:string="";

    nombre:string="";
  
    subtitulo:string="";
  
    descripcion:string="";

    fondo:string="";

    constructor(id:number){
        if(id==1){
            this.imagen="assets/mario.png";

            this.nombre="Mario";
      
            this.subtitulo="Saga: Mario";
      
            this.descripcion="Ataca con puñetazos y patadas de poco alcance y poco retroceso. Usa como proyectiles bolas de fuego. Perfecto para aprender a jugar e iniciar combos.";

            this.fondo="red";
        }

        else if(id==2){
            this.imagen="assets/link.png";

            this.nombre="Link";
      
            this.subtitulo="Saga: The Legend of Zelda";
      
            this.descripcion="Ataca con la espada y patadas. Tiene bastante retroceso y daño. Puede usar flechas, bombas y su boomerang. Es perfecto para atacar a distancia y campear.";
        
            this.fondo="green";
        }

        else if(id==3){
            this.imagen="assets/pikachu.png";

            this.nombre="Pikachu";
      
            this.subtitulo="Saga: Pokémon";
      
            this.descripcion="Muy veloz y ligero. Usa ataques electricos y golpes cuerpo a cuerpo. Todo esto lo hace un personaje muy versátil pudiendo atacar desde laraga y corta distancia. ";
        
            this.fondo="yellow";
        }

        else if(id==4){
            this.imagen="assets/fox.png";

            this.nombre="Fox";
      
            this.subtitulo="Saga: Star Fox";
      
            this.descripcion="Usa ataca cuerpo y disparar con una pistola láser. Su alta velocidad de movimiento y de caída, sumado a y juego de combos lo convierten en un personaje muy sólido.";
        
            this.fondo="orange";
        }

        else if(id==5){
            this.imagen="assets/marth.png";

            this.nombre="Marth";
      
            this.subtitulo="Saga: Fire Emblem";
      
            this.descripcion="Ataca con su espada dando golpes muy fuertes. Esto sumado a su buen juego de combos y decente velocidad lo convierten en el mejor personaje con espada.";
        
            this.fondo="blue";
        }              
    }  
}