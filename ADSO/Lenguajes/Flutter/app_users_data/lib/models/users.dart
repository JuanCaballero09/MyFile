import 'dart:convert';

import 'address.dart';
import 'company.dart';


class User{
  int? id;
  String? name;
  String? username;
  String? email;
  Address? address;
  String? phone;
  String? website;
  Company? company;


  User (String json){
    
    Map<String, dynamic> map = jsonDecode(json);

    this.id = map['id'];
    this.name = map['name'];
    this.username = map['username'];
    this.email = map['email'];
    this.phone = map['phone'];
    this.website = map['website'];

    this.address = Address(map['address']) ;

    this.company = Company(map['company']) ;

  }
}