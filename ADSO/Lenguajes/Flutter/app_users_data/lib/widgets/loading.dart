
import 'package:flutter/material.dart';

class Loading extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: 'loading',
      home: Scaffold(
        body: Center(child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircularProgressIndicator(),
            Text(''),
            Text('Cargando'),
            Text(''),
            Image.asset('assets/img/hello cat.jpg', height: 200, width: 200,)
          ],
          )
        ),
      ),
    );
  }
}