---
title: Structural Type
description: 
navigation: 
  icon: i-lucide-code-xml
---

## Overview
A structural type, in Cambo, is another special user-defined type that allows you to a type that groups a collection of data of different types in a single place, (similar to object in javascript). This structural type is just like an anonymouse struct without a name. 


Normally, you need to define a struct then create an instance to store your data, but with the help of this structural type, you don't have to.

**Example:**
```kh
int main(string args[]){

  auto car = {
    brand: "Toyota",
    model: "Corolla",
    isUsed: false
  }; 

  println(car.brand);  # Toyota
  println(car.model);  # Corolla
  println(car.isUsed); # false

  return 0;
}
```
The syntax is just the same as key-value pair literal, or anything similar, in most other high level programming languages. However, behind the scene of this syntatic sugar is just a struct without its definition. 


You can also put create a function, can be an actual function or a lambda, inside it directly.

```kh
auto car = {
  brand: "Toyota",
  model: "Corolla",
  isUsed: false,
  void displayInfo(){
    print("{}\n{}\n{}\n", self.brand, self.model, self.isUsed);
  }
};  
```


Or with lambda:
```kh
auto car = {
  brand: "Toyota",
  model: "Corolla",
  isUsed: false
  displayInfo: () => print("{}\n{}\n{}\n", self.brand, self.model, self.isUsed);
};  
```
::note
type of each field is automatically infered.
::

## Schema
Using `auto` is a convenient way to define a structural type, but when the types of each field are not specified and not fixed, it might cause some problems when you want to safely process the data.

A schema is a blueprint that defines the structure of an object, specifying the exact fields, their data types, and any validation rules they must follow

Since this is just an anonymous struct, to define a schema for a structural type, you just create a struct definition.

```kh
struct Car{
  string brand, 
  string model,
  bool isUsed,
}
void displayInfo(Car car){
  print("{}\n{}\n{}\n", car.brand, car.model, car.isUsed);
}

int main(string args[]){

  displayInfo({
    brand: "Toyota",
    model: "Corolla",
    isUsed: false
  });

  return 0;
}
```
Now the valid field you can pass into the `displayInfo` function must match with the defined schema `Car`.



## Important
```kh
# strutural type schema
struct Car{
  string brand, 
  string model,
  bool isUsed,
}
```
```kh
# the actual struct 
struct Car{
  string brand; 
  string model;
  bool isUsed;
}
```
These two syntax of struct may seem very similar but each serves its own purpose


::note
The syntax to define schema might need to change in order to avoid any confusion, and this name of `strutural type` is not sure to be kept or changed.
::