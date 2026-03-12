---
title: Const
description: Constant might be a better choice!
navigation:
  icon: i-lucide-code-xml
---

`const` is keyword that makes something stay constant, unchanged. it can be used to qualify:
- Variables
- Functions
- Structs




## Const variables

`const` is used to make variables immutable, which means that they can only 
be read but not modified.

```kh
const type identifier = value;
```

#### Example
```kh
const float PI = 3.1415;
```
`PI` is now immutable. If you try to modify its value, it will result in compilation error.


::note
In Cambo, for primitive-typed variables that was declared with `const`, the compiler will automatically 
perform constant folding by substituting their literal value at usage site, which means the need for 
memory allocation can be eliminated.
::


## Const functions
Just like variable, `const` also works for functions. If a function is marked as constant, the entire function including parameters and its body should also be constant, which are known at compile time!

**Example:**
```kh
const int sum(int a, int b){
  return a + b;
}

int main(string args[]){

  int result = sum(1, 2); # result = 3

  return 0;
}
```
The function `sum` will be run or computed at compile time as it's a const function. Furthermore, `sum` will be nowhere to be found in the program at run time.

## Const struct
A constant struct is a special struct that has all of its member as constant, no exception! 


::tip
See [struct]() first!
::

**Example:**
```kh

struct RGB{
  ubyte r, g, b;
  init(self.r, self.g, self.b);
}

static const struct Color{
  static const RGB orange = RGB(255, 165, 0);
  static const RGB purple = RGB(128, 0, 128);
  static const RGB pink   = RGB(255, 192, 203);
  static const RGB gray   = RGB(128, 128, 128);
  static const RGB brown  = RGB(165, 42, 42);
}
```

This const struct exists is mainly because enum is not enough, as enum only works for primitive types, but here pops another question.
And last but not least, this struct `Color` only exists at compile time, if optimization is on!


::accordion

:::accordion-item{label="Why don't make enum also work for this?" icon="i-lucide-circle-help"}
The answer is really simeple, **simplicity!**.

If enum were this powerful, then Cambo would be just as complicated as C++. 

**"With great power comes great responsibility!" - uncle Ben**

:::
::


::tip
Color is a `static const` struct, so all of its members will be the same. Which means `static const` for RGB orange and others is optional, but including it makes code meaningful.
::

## The pros & cons
- it reduces some memory usage.
- it reduces the execution time at run time.
- but it increases the compilation time.

::warning
This page is not completed, will be updated later.
::