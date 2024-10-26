
import 'package:flutter/material.dart';

import '../models/users.dart';

// ignore: must_be_immutable
class DataUser extends StatelessWidget{
  
  User user;

  DataUser({required this.user});
  
  @override 
  Widget build(BuildContext context){
    return MaterialApp(
      title: 'Datos-Usuario',
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(''),
              Text('- USER -'),
              Text('id: ${user.id}'),
              Text('name: ${user.name}'),
              Text('username: ${user.username}'),
              Text('email: ${user.email}'),
              Text('phone: ${user.phone}'),
              Text('website: ${user.website}'),
              Text(''),
              Text('- ADDRESS -'),
              Text('street:${user.address!.street}'),
              Text('suite: ${user.address!.suite}'),
              Text('city: ${user.address!.city}'),
              Text('zipcode: ${user.address!.zipcode}'),
              Text(''),
              Text('- GEO -'),
              Text('lat: ${user.address!.geo!.lat}'),
              Text('lng: ${user.address!.geo!.lng}'),
              Text(''),
              Text('- COMPANY -'),
              Text('name: ${user.company!.name}'),
              Text('catchPhrase: ${user.company!.catchPhrase}'),
              Text('bs: ${user.company!.bs}'),
            ],
          )
        ),
      ),
    );
  }
}