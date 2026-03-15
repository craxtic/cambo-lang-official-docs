---
title: Union
description: Different types live in the same place.
navigation:
  icon: i-lucide-code-xml
---

## Overview
A union is a user-defined type that allows different data types to be stored in the same memory location.

```kh [syntax]
union identifier{
  type identifier,
  type identifier,
  ...,
  type identifier,
}
```
::note
`tag` is reserved, can not be used as an identifier in union!
::
**The size of a union depends on one of its member with the largest size.**

#### Example
```kh
union Data {
  int i;
  float f;
  double d;
}
```
In this case, since double has is biggest one, which is 64 bits, 
the size of memory allocated for this union will be 64 bits.

## How to use it?
```kh
union Data {
  int i;
  float f;
}

int main(string args[]){

  Data data;
  data.i = 2;
  data.f = 3.14;

  return 0;
}
```
In the code above, `data` is declared without initialization, so the compiler will automatically assign a default value with one of its types, `int` or `float` (usually the first one in the list).

However, you can also initialize a value directly, see code below:
```kh
int main(string args[]){

  Data data = Data.i(12); # initialized with int type
  data.i = 99;
  data.f = 12.0;

  return 0;
}
```

## Tag 
There's a built-in feature in every union in your program, which is `tag`. `tag` is like a tracker who keep tracking which type is being used in the time being, allowing you to write safe code.
```kh
union Data {
  int i;
  float f;
}

int main(string args[]){

  Data data = Data.i(2);

  match(data.tag){
    case int:
      # use data.i
    break;
    case float:
      # use data.f
    break;
  }

  return 0;
}
```
When you construct a union, a list of tags will be created to represent all the existing types in the union. And you can also use `match` to handle all the defined types.

::warning
This page is not completed, will be updated later.
::