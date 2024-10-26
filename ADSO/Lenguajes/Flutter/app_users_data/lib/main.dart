import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'models/users.dart';
import 'widgets/loading.dart';
import 'widgets/dataUser.dart';
import 'widgets/errorDato.dart';

void main(){
  runApp(MyApp());
}


class MyApp extends StatelessWidget{
  
  
  Future<User> obtData() async {

    var url = Uri.https('jsonplaceholder.typicode.com', '/users/1');
    var response = await http.get(url);

    // await Future.delayed(Duration(seconds: 2));

    User user = User(response.body);

    if (response.statusCode == 200){
      return user;
    } else {
      throw Exception('ERROR al cargar datos');
    }
  }

  
  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Json-PlaceHolder-data',
      home: Scaffold(
        body: FutureBuilder<User>(
          future: obtData(), 
          builder: (BuildContext context, AsyncSnapshot<User> snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting){
              
              return Loading();

            }else if (snapshot.hasError){

              return ErrorDato();

            }else {

              return DataUser(user: snapshot.data as User);

            }
          }
        ),
      ),
    );
  }

}
