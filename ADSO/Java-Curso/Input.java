import java.util.Scanner;

public class Input {
    public static void main(String args[]){
        
        Scanner entrada = new Scanner(System.in);
        String nombre = "";
        int num1 = 0, num2 = 0, resultado = 0;

        System.out.println("¿Cual es tu nombre?");
        nombre = entrada.nextLine();

        System.out.println("Introduce numero1 para suma:");
        num1 = entrada.nextInt();
        
        System.out.println("Introduce numero2 para suma:");
        num2 = entrada.nextInt();

        resultado = num1 + num2;


        System.out.println("Hola " + nombre + " su suma dio: " + resultado);
        
    }
}
