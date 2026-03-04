---
title: Init/Deinit
description: Constructor & Destructor.
navigation:
  icon: i-lucide-code-xml
---

Constructor and Desctructor method do exist for struct in Cambo, and they can be defined by using keyword `init` and `deinit` respectively followed by the struct name.

::accordion

:::accordion-item{label="What is a constructor & a destructor?" icon="i-lucide-circle-help"}
- A construtor is a special method that is automatically invoked when an instance is created.
- A destrutor is a special method that is automatically invoke when a instance goes out of scope.
:::
:: 

**Example 1:** In code below, we're going to define a constructor for the struct `Vect2` using `init`.
```kh
struct Vect2{
  float x, y;

  init Vect2(int x, int y){
    self.x = x;
    self.y = y;
  }
}

int main(string args[]){

  Vect2 vect = Vect(3, 4);

  return 0;
}
```
Notice how we created the instance by doing `Vect(3, 4)`, this works because we have defined a constructor method for struct `Vect2`. 


**Example 2:** This example, we're going to show deinit can be used to define the destructor of a struct.

```kh
struct Data{
  int data;

  deinit Data(){
    print("data was destroyed!\n");
  }
}

int main(string args[]){

  {
    Data data = Data();
  }

  return 0;
}
```
To actually see the `data was destroyed!` get printed to the output, we need to wrap with {} when creating an instance, so when it goes out of scope, the destructor will be invoked.
