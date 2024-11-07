class Usuario {

  String nombre; // atributo privado
  int edad; // atributo privado
  double altura; // atributo privado
  
  String email;
  


  Usuario({ String this.nombre = '', int this.edad = 0 , double this.altura = 0.0, String this.email = '' });

  String getNombre(){
    return nombre;

  }

  setNombre(String nombre){
    this.nombre = nombre;

  }

  int getEdad(){
    return this.edad;

  }

  setEdad (int edad){
    this.edad = edad;
  }

  double getAltura(){
    
    return this.altura;

  }

  setAltura(double altura){
    this.altura = altura;
  }

} 