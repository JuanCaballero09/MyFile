class Transporte {
    public String empresa = "Carolina" ;
    public String ciudad = "B/quilla";
    
    public String getInfo(){
        return this.empresa + "-" + this.ciudad;
    }
}

class Publico extends Transporte {
    private int ninterno;
    public String ruta;
    
    public Publico(int n){
        this.ninterno = n;
    }
    
    public String getCodigo(){
        return this.ruta + " - " + this.ninterno;
    }
    
}

class Particular extends Transporte {
    public String placa;
    public String color;
    private int modelo;
    
    @Override
    public String getInfo(){
        return this.ciudad;
    }
    
    public Particular(int m){
        this.modelo = m;
    }
    
    public int getRtm(){
        return this.modelo + 5;
    }
}


public class Act_290724 {
    public static void main(String[] args) {
        
        
        Publico pu = new Publico(920);
        pu.ruta = "Malambo City";
        System.out.println(pu.getCodigo());
        
        Publico pub = new Publico(450);
        pub.ruta = "Cano dulce";
        System.out.println(pub.getCodigo());
        
        System.out.println("------------------------------------");
        
        Particular pa = new Particular(2020);
        pa.placa = "XYZ 123";
        pa.color = "Rojo";
        System.out.println(pa.getInfo());
        System.out.println("La tecnico mecanica se hace el: " + pa.getRtm());
        
        System.out.println("");
        
        Particular par = new Particular(2024);
        par.placa = "XYZ 321";
        par.color = "Azul";
        System.out.println(par.getInfo());
        System.out.println("La tecnico mecanica se hace el: " + par.getRtm());
    }
}