---
title: Static
description: Make the data stick to your struct.
navigation: 
  icon: i-lucide-code-xml
---

Static is a way to make variables or attributes belong to a struct rather than a specific instance of that struct. 

```kh
struct Rect {
  int32 width;
  int32 height;

  init Rect(self.width, self.height);

  int32 area(){
    return width * height;
  }

  static void print_definition(){
    print("A rectangle is a rectilinear convex polygon or a quadrilateral with four right angles.")
  }
}

int main(string args[]){

  Rect.print_definition();

  Rect rect = Rect(12, 3);
  print("Area: {}", rect.area());

  return 0;
}
```
In the code above, you don't need to create an instance to call the function `print_definition`, you can call it directly using the struct name because it belongs to the struct not the any instances. However, if you want to get the area, you have to create an instance of struct `Rect` first.


::note
You can have static variables or methods but you can not have static struct definition.
`static struct Rect{ # ... }` is not valid.
::


## Other Contexts
The idea of static is not only for struct, but also for variables declared in functions.

```kh
void do_something(){

  static int32 counter = 0;

}
```

The `counter` now belongs to the function itself, so if you modify its value, it keep its the modified value even after the function exit.