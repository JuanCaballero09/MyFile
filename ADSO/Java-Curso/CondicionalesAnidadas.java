public class CondicionalesAnidadas {
    
    public static void main(String args[]){

        int num1 = 8;
        int num2 = 4;
        int resultado = 0;
        int operacion = 0;


        if (operacion == 1){
            resultado = num1 + num2;
            System.out.println("La suma da: " + resultado);

        } else if (operacion == 2){
            resultado = num1 - num2;
            System.out.println("La resta da: " + resultado);

        } else if (operacion == 3){
            resultado = num1 * num2;
            System.out.println("La multiplicación da: " + resultado);

        } else if (operacion == 4){
            resultado = num1 / num2;
            System.out.println("La divición da: " + resultado);

        } else {
            System.out.println("Operación no valida");
        }
        
    }
}
