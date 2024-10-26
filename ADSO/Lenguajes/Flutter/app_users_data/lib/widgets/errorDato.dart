
import 'package:flutter/material.dart';

class ErrorDato extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ERROR',
      home: Scaffold(
        body: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Ha ocurrido un Error  '),
              Text(''),
              Image.asset('assets/img/error-icon-32.png', height: 50, width: 50,),
              
            ],
          ),
        ),  
      ),
    );
  }


}