import java.util.Scanner;

public class OperadoresLogicosYRelacionales {

    public static void main(String[] args) {
        
        Scanner entrada = new Scanner(System.in);

        String nombre;
        int clave;
        int antiguedad;

        System.out.println("");

        System.out.println("Bienvenido al sistema Vacacional de Coca-Cola Company");

        System.out.println("");
        System.out.println("---------------------------------------------------------------------");
        System.out.println("");

        System.out.println("¿Cuál es el nombre del trabajador?");
        nombre  = entrada.nextLine();
        System.out.println("");
        
        System.out.println("¿Cuántos años de servicio tiene el trabajador?");
        antiguedad = entrada.nextInt();
        System.out.println("");

        System.out.println("¿Cual es la clave de departamento?");
        System.out.println("1 - Atencion al Cliente");
        System.out.println("2 - Logística");
        System.out.println("3 - Gerencia");
        clave = entrada.nextInt();
        System.out.println("");

        if (clave == 1){
            
            
            if (antiguedad == 1) {
                
                System.out.println(nombre + " Tiene derecho a 6 días de descanso");

            } else if (antiguedad >= 2 && antiguedad <= 6){

                System.out.println(nombre + " Tiene derecho a 14 días de descanso");

            } else if (antiguedad >= 7){

                System.out.println(nombre + " Tiene derecho a 20 días de descanso");

            } else {
                System.out.println(nombre + " No tiene derecho a vacaciones");
            }


        } else if (clave == 2){

            if (antiguedad == 1) {
                
                System.out.println(nombre + " Tiene derecho a 7 días de descanso");

            } else if (antiguedad >= 2 && antiguedad <= 6){

                System.out.println(nombre + " Tiene derecho a 15 días de descanso");

            } else if (antiguedad >= 7){

                System.out.println(nombre + " Tiene derecho a 22 días de descanso");

            } else {
                System.out.println(nombre + " No tiene derecho a vacaciones");
            }

        } else if (clave == 3){

            if (antiguedad == 1) {
                
                System.out.println(nombre + " Tiene derecho a 10 días de descanso");

            } else if (antiguedad >= 2 && antiguedad <= 6){

                System.out.println(nombre + " Tiene derecho a 20 días de descanso");

            } else if (antiguedad >= 7){

                System.out.println(nombre + " Tiene derecho a 30 días de descanso");

            } else {
                System.out.println(nombre + " No tiene derecho a vacaciones");
            }

        } else {

            System.out.println("Error, la clave de departamento no existe.");

        }

    }
    
}