class CuentasBancarias {
  int? numeroCuenta;
  String? titular;
  double? saldo;
  String? tipoCuenta;

  CuentasBancarias(
      int numCuenta, String titular, double saldo, String tipCuenta) {
    this.numeroCuenta = numCuenta;
    this.titular = titular;
    this.saldo = saldo;
    this.tipoCuenta = tipCuenta;
  }

  String infoCuenta() {
    return "Numero de cuenta: ${numeroCuenta}, Titular: ${titular}, Saldo de Cuenta: ${saldo}, Tipo de Cuenta: ${tipoCuenta}";
  }
}

void main() {
  CuentasBancarias cuenta1 =
      new CuentasBancarias(3024681298, 'Juan Esteban', 1200000.00, "Ahorro");

  print(cuenta1.infoCuenta());
}
