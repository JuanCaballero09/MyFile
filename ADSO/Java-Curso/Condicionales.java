public class Condicionales {
    public static void main(String args[]){
        int mate = 5;
        int biolo = 8;
        int quim = 7;
        double prome = 0;

        prome = (mate + biolo + quim) / 3;

        if (prome >= 6) {
            System.out.println("El alumno aprovó con: " + prome);
        } else {
            System.out.println("El alumno reprovó con: " + prome);
        }
    }
}
