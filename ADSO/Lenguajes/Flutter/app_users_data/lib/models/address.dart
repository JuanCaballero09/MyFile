import 'geo.dart';


class Address {
  String? street;
  String? suite;
  String? city;
  String? zipcode;
  Geo? geo;

  Address(Map map) {
    this.street = map['street'];
    this.suite  = map['suite'];
    this.city  = map['city'];
    this.zipcode  = map['zipcode'];
    this.geo = Geo(map['geo']) ;

  }
}