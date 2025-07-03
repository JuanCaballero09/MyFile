import java.util.Scanner;

public class CicloFor {
    public static void main(String args[]){
        int vueltas;
        Scanner input = new Scanner(System.in);
        
        System.out.println("Cantidad de vueltas:");
        vueltas = input.nextInt();

        for (int i = 0; i <= vueltas; i++){
            
            System.out.println( i );

        }
    }
}
