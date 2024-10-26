
class Company {
  String? name;
  String? catchPhrase;
  String? bs;

  Company(Map map) {

    this.name = map['name'];
    this.catchPhrase = map['catchPhrase'];
    this.bs = map['bs'];

  }
}