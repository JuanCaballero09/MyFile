public class Operadores {
    public static void main(String args[]){
        int num1 = 25;
        int num2 = 5;

        // suma
        int suma = num1 + num2;

        // resta
        int resta = num1 - num2;

        //multiplicación
        int multi = num1 * num2;

        // División
        int div = num1 / num2;

        // potencia
        double poten = Math.pow(num1, num2);

        // prioridad
        int prori = (num1 - num2) + 10;



        System.out.println(suma + " " + resta + " " + multi + " " + div + " " + poten  + " " + prori);
    }
}
