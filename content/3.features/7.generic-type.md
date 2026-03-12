---
title: Generic Type
description: Create a blueprint for a struct or a function.
navigation:
  icon: i-lucide-code-xml
---

A **Generic** is a feature that allows you to write a single blueprint for a struct or function that works with different data types. Because Cambo is a statically typed langauge, the compiler must know the exact data at build time. To achieve this without a runtime penalty, the compiler performs Monomorphization: every time you use the generic code with a specific type (like `int` or `string`), the compiler secretly generates a unique, concrete version of that code for that exact type.

## Generic Function
```kh
void prinln<type T>(T output){
  print("{}\n", output);
}

int main(string args[]){
  
  prinln(12);
  prinln("string");

  return 0;
}
```
This is similar to writing overloading functions but in dynamic way with a fixed number of parameter.

To create more generic types, you can just do `<type T1, T2>`
::note
`type` is a keyword.
::



## Generic Struct
You can define a generic struct by following the same syntax as you've seen in the generic function. 

**Example:**

```kh
struct Box<type T>{
  T _value;

  init Box(T value){
    self._value = value;
  }

  void show(){
    print("value: {}", self.value);
  }

}

int main(string args[]){

  Box<int32> box1 = Box<int32>(10);
  Box<float32> box2 = Box(12.2); # the second `<float32>` is optional
 
  box1.show();
  box2.show();

  return 0;
}
```


