public class Variables{
    public static void main(String args[]){
        
        // Tipos de datos Primitivos

        // Enteros
        byte num0 = 127; // Los "byte" van desde -128 a 127
        short num1 = 32757; // Los "short" van desde -32,768 hasta 32,767
        int num2 = 2147483647; // los "int" van desde -2,147,483,648 hasta 2,147,483,647
        long num3 = 1234567890111L; // Los "long" son para valores mas grandes, con la particularidad que al final de un numero grande se agrega una "L" mayuscula

        // Decimales
        double decimal0 = 0.123; // El valor decimal puede alojar hasta varios caracteres despues del punto
        float decimal1 = 0.22f; // El valor "float" podra alojar valores grandes despues del punto como e38, ademas se tiene que poner una "f" al final para identificar que es un float

        // Otros
        char chars = 2; // EL "char" se usa para representar un caracter individual (emojis)
        boolean trues = true;
        boolean falses = false;


        // Tipo Objeto

        String hola = "Hola mundo"; // Los "String" son una clase ya definida para las cadenas de texto

        System.out.println(num0 + " " + num1 + " " + num2 + " " + num3 + " " + decimal0 + " " + decimal1 + " " + chars + " " + trues + " " + falses + " " + hola);
    }
}