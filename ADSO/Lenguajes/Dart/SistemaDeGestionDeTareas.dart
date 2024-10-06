
class Tarea{
  String nombre;
  String descripcion;
  bool completada;


  Tarea({required this.nombre,required this.descripcion, this.completada = false});

  void mostrarComoCompletado(){
    this.completada = true;
  }

  void mostrar_info(){
    print('"nombre": ${this.nombre}');
    print('"descripción": ${this.descripcion}');
    print('"completada":${this.completada ? " si" : " no" }');
  }
}
// ------------------------------------------------------------
class ListaDeTareas{
  List<Tarea> tareas = [];

  void agregarTarea(Tarea tarea) => tareas.add(tarea);
  

  void mostrarTareas(){
    int i = 1;
    for (var tarea in tareas) {

      print('tarea No: $i');

      tarea.mostrar_info();
      print("");

      i += 1;

    }
  }
}

void main(){

  Tarea matematicas = Tarea(nombre: "funciones", descripcion: "investigar funciones."); 
  Tarea filosofia = Tarea(nombre: "Diogenes", descripcion: 'investigar sobre diogenes y porque lo llaman el "perro".');


  ListaDeTareas lista1 = ListaDeTareas();

  filosofia.mostrarComoCompletado();

  // filosofia.mostrar_info();
  // matematicas.mostrar_info();


  lista1.agregarTarea(filosofia);
  lista1.agregarTarea(matematicas);

  lista1.mostrarTareas();



}