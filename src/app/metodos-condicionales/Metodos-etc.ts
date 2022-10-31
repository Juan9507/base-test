
export class MetodosCondicionales {

  constructor() {
  }

   /**
    * Para divertirse escribiendo codigo cochino :3
    */

   public rango(value:number): string {

    if(value < 5){
      if(value > 2){
        return "esta en el rango"
      }
    }
    return "No esta en el rango"
   }

   public fizzBizz(value:number){

      if((value % 3 == 0) && (value % 5 == 0)){
        return "fizzbuzz"
      }else if (value % 5 == 0){
        return "buzz"
      }else if (value % 3 == 0){
        return "fizz"
      }

      return value
   }

}
