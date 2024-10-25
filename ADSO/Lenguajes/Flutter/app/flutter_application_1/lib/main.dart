import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_application_1/widgets/errodato.dart';
import 'package:flutter_application_1/widgets/loading.dart';
import 'package:flutter_application_1/widgets/success.dart';

import 'models/post.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget{

  Future<Post> fetchData() async {
    final url = Uri.parse('https://jsonplaceholder.typicode.com/posts/3');
    final response = await http.get(url);
    if (response.statusCode == 200) {      
      return Post(response.body);
    }else{
      throw Exception('Error al cargar datos');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: FutureBuilder<Post>(
          future: fetchData(), // Llama a la función que retorna un Future
          builder: (BuildContext context, AsyncSnapshot<Post> snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Loading();
            } else if (snapshot.hasError) {
              return Errordato();
            } else {
              Post post = snapshot.data!;
              return Success(post: post);
            }
          },
        ),
      ),
    );
  }
}

