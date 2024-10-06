class Colaborador{
  String nombreCompleto;  // private
  int tipoColaborador; // private
  double aporte; // private


  Colaborador({required this.nombreCompleto, required this.tipoColaborador, this.aporte = 0});


  String getNombreCompleto() => this.nombreCompleto;
  int getTipo() => this.tipoColaborador;
  double getAporte() => this.aporte;

  @override
  String toString(){
    return '"nombre": ${this.nombreCompleto}, "tipo": ${this.tipoColaborador}, "aporte": ${this.aporte}';
  }
}

class Recolecta{
  
  List <Colaborador> colaboradores = []; // private
  double montoRecaudar;  // private
  double balance;  // private

  List<Colaborador> colaboradoresGenerosos =[]; // private


  Recolecta({required this.montoRecaudar, this.balance = 0});
  
  void addColaborador(Colaborador colab) => colaboradores.add(colab);

  bool finalizada(){
    if (balance >= montoRecaudar) {

      return true;

    } else {

      return false;

    }
    
  }
  // private
  List<Colaborador> generosos() /* private */ { 

    for (var colab in colaboradores){
      if (colab.aporte >= 10000){
        colaboradoresGenerosos.add(colab);
      }
    }

    return colaboradoresGenerosos;
  }

  
  double recaudoGeneroso(){
    double recaudo = 0;
    for (var colab in colaboradoresGenerosos){
      recaudo += colab.aporte;
    }
    return recaudo;
  }

  double promedioGenerosos(){
    double recaudo = 0;
    int colaboradoresGeneroso = 0;
    for (var colab in colaboradoresGenerosos){
      recaudo += colab.aporte;
      colaboradoresGeneroso ++ ;
    }

    double promedio = recaudo / colaboradoresGeneroso;
    return promedio;
  }

  String recaudoPorTipo(){
    double recaudoTipo1 = 0;
    double recaudoTipo2 = 0;
    
    for (var colab in colaboradores){
      if (colab.tipoColaborador == 1){
        recaudoTipo1 += colab.aporte;
      } else {
        recaudoTipo2 += colab.aporte;
      }
    }


    return "recaudo tipo1: ${recaudoTipo1} y recaudo tipo2: ${recaudoTipo2}";
  }
}





void main(){
  Colaborador juanes = Colaborador(nombreCompleto: "Juanes", tipoColaborador: 1, aporte: 1000);
  Colaborador ana = Colaborador(nombreCompleto: "ana", tipoColaborador: 2, aporte: 20000);
  Colaborador pedro = Colaborador(nombreCompleto: "pedro", tipoColaborador: 1, aporte: 10000);
  Colaborador juancho = Colaborador(nombreCompleto: "juancho", tipoColaborador: 2, aporte: 2000);

  Recolecta rec1 = Recolecta(montoRecaudar: 100);


  rec1.addColaborador(juanes);
  rec1.addColaborador(ana);
  rec1.addColaborador(pedro);
  rec1.addColaborador(juancho);

  rec1.generosos();
  
  print(rec1.recaudoGeneroso());
  print(rec1.promedioGenerosos());
  print(rec1.recaudoPorTipo());
  
  
}