public class Ciclos3 {
    public static void main(String args[]){
        int a = 0, b = 1, c = 0, i = 1;

        System.out.println("Serie con for: ");

        for (i = 0; i < 10; i++){

            if (i < 9) {
                System.out.print(a + ", ");
            }else{
                System.out.print(a);
            }

            c = a + b;
            a = b;
            b = c;
        }

        System.out.println("");
        System.out.println("Serie con while: ");

        a = 0;
        b = 1;
        c = 0;
        i = 0;

        while (i < 10) {

            if (i < 9) {
                System.out.print(a + ", ");
            }else{
                System.out.print(a);
            }

            c = a + b;
            a = b;
            b = c;
            i++;
        }

        System.out.println("");
        System.out.println("Serie con do-while: ");

        a = 0;
        b = 1;
        c = 0;
        i = 0;

        do{
            if (i < 9) {
                System.out.print(a + ", ");
            }else{
                System.out.print(a);
            }

            c = a + b;
            a = b;
            b = c;
            i++;
        } while(i < 10);
    }
}
