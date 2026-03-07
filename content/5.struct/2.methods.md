---
title:  Methods
description: Keep your functions inside struct!
navigation:
  icon: i-lucide-code-xml
---

Methods are typically functions that belong to the struct. This enable us to define functions to process data and keep them close to those data.

There are two ways to define a method:
- Inside struct definition.
- Outside struct definition.

## Define inside struct
```kh [syntax]
struct identifier{
  
  type identifier(parameters){
    # code...
  }

}
```

**Example:**
In this example below, we're going to define a method `norm` to find the norm value of the `Vect2`. And we also need to a `sqrt` function from the math library!
```kh
import math;

struct Vect2{
  float x;
  float y;

  float norm(){
    return sqrt(x**2 + y**2);
  }
}

int main(string args[]){

  Vect2 vect = Vect2();
  vect.x = 3;
  vect.y = 4;

  int norm = vect.norm(); # norm = 5 

  return 0;
}
```


## Define outside struct
```kh [syntax]
struct identifier{
  
  type identifier(parameters);

}

type identifier.identifier(parameters){ # struct_name.method_name
  # code...
}
```
**Example:**

```kh
import math;

struct Vect2{
  float x;
  float y;
  float norm();
}

float Vect2.norm(){
  return sqrt(self.x**2 + self.y**2);
}

int main(string args[]){

  Vect2 vect = Vect2();
  vect.x = 3;
  vect.y = 4;

  int norm = vect.norm(); # norm = 5 

  return 0;
}
```
This works the same as the inside struct approach but we keep the definition of the struct `Vect2` cleaner, and keeping the defition of the method `norm` somewhere else.
::note
Notice, `self.x` and `self.y` are used instead of `x` and `y`.
::