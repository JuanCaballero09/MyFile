class Usuario {

  String _nombre; // atributo privado
  int _edad; // atributo privado
  double _altura; // atributo privado
  
  String email;
  


  Usuario({required String this._nombre = '',required int this._edad = 0 ,required double this._altura = 0.0, String this.email = '' });

  String getNombre(){

    return _nombre;

  }

  setNombre(String nombre){
    this._nombre = nombre;
  }

  int getEdad(){
    
    return this._edad;

  }

   setNombre(int edad){
    this._edad = edad;
  }

  double getAltura(){
    
    return this._altura;

  }

  setNombre(double altura){
    this._altura = altura;
  }

} 