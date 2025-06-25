//  Estructuras de control (Switch - Case)

import java.util.Scanner;

public class Operaciones {

    public static void main(String args[]){

        Scanner input = new Scanner(System.in);

        int num1, num2, resultado, oper;


        System.out.println("Num1");
        num1 = input.nextInt();

        System.out.println("Num2");
        num2 = input.nextInt();

        System.out.println("ingrese operación");
        System.out.println("1 -> +");
        System.out.println("2 -> -");
        System.out.println("3 -> x");        
        System.out.println("4 -> /");

        oper = input.nextInt();

        switch (oper) {
            case 1:

                resultado = num1 + num2;
                System.out.println("La suma da: " + resultado);
                break;

            case 2:

                resultado = num1 - num2;
                System.out.println("La resta da: " + resultado);
                break;

            case 3:

                resultado = num1 * num2;
                System.out.println("La multiplicacion da: " + resultado);
                break;

            case 4:

                if (num2 != 0){
                    resultado = num1 / num2;
                    System.out.println("La divición da: " + resultado);
                    break;

                } else {
                    System.out.println("Error, No puedes dividir entre cero '0'");
                    break;
                }
            
            default:
                System.out.println("Error, operacion no encontrada");
                break;
        }

    }

}

