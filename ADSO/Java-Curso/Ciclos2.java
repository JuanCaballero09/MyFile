public class Ciclos2 {
    public static void main(String args[]){        
        int i = 1, j = 99;

        System.out.println("Serie con for: ");
        for (i = 1; i <= 5 ; i++){
            if (i < 5) {
                System.out.print(i + ",");
                System.out.print(j + ",");
            } else {
                System.out.print(i + ",");
                System.out.print(j);
            }
            j--;
        }
        System.out.println("");
        i = 1;
        j = 99;
        System.out.println("Serie con while: ");

        while (i <= 5) {
            
            if (i < 5) {
                System.out.print(i + ",");
                System.out.print(j + ",");
            } else {
                System.out.print(i + ",");
                System.out.print(j);
            }
            j--;
            i++;
        }

        System.out.println("");
        i = 1;
        j = 99;
        System.out.println("Serie con do-while: ");

        do{
            if (i < 5) {
                System.out.print(i + ",");
                System.out.print(j + ",");
            } else {
                System.out.print(i + ",");
                System.out.print(j);
            }
            j--;
            i++;
        }while(i <= 5);
    }   
}
