import 'package:flutter/material.dart';

import '../models/post.dart';

class Success extends StatelessWidget {
  Post post;

  Success({super.key, required this.post});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: 20.0,),
        Image.network(
          'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl-2.jpg', 
          width: 300.0,
        ),
        Text(post.title!, style: const TextStyle(fontSize: 26.0)), 
        Text(post.body!),
        const Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly,children: [
          Icon(Icons.favorite),
          Icon(Icons.audiotrack),
          Icon(Icons.beach_access)
        ],
        )
        ],
    );
  }
}