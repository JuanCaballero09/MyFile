import 'dart:convert';

class Post{
  int? userId;
  int? id;
  String? title;
  String? body;

  Post(String jsonString){
    Map data = jsonDecode(jsonString);
    userId = data['userId'];
    id = data['id'];
    title = data['title'];
    body = data['body'];
  }
}