---
title: Encapsulation
description: Hide your data!
navigation:
  icon: i-lucide-code-xml
---


The purpose of encupsulation is to make sure that sensitive data is hidden from users. To achieve this, you must add underscore(_) in front of your variables or attributes names. 

**Example:**
```kh
struct Person{
  string name;
  string _id;
  string _address.

  init Person(name, _id, _address);

  # ...
}

int main(string args[]){

  Person p = Person("Dara", "e20250972", "ax34ld");

  print("Name: {}\n", p.name);
  print("ID: {}\n", p._id); # error!
  print("Address: {}\n", p._address); # error!
  return 0;
}

```
The above program would not get compiled because we try to access the data that we're supposed not to touch.



## Other Cases
The use of underscore to make something hidden does not only works for struct, it also works outside of struct, such as make a function local or global across many source files.

```kh [test.kh]
void _hidden_function(){
  # code...
}
```
You are not able to use the `_hidden_function` outside this `test.kh` source file because it's marked as local.