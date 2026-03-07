---
title: Struct
description: Wrap your data!
navigation:
  icon: i-lucide-code-xml
---

## Overview

`struct` is a user-defiend type that groups serveral related pieces of data together, similar to struct in 
C. However, in Cambo, `struct` is more than just a data container. It can also contain functions that 
operate on its data.

### Key Features
- **Fields**: Store the data of the struct. All data are external by default.
- **Encupsulation**: Both Fields and Functions can be declared for internal use only by adding `_` 
before variables or functions name.
- **Methods**: Functions attached to the struct itself. They, by default, have access to the struct 
instance through the keyword `self`; 
- **Construtor**: Defined using `init` keyword, this is a special function which is automatically invoked
when an instance of the struct is created.
- **Destructor**: Defined using `deinit` keyword, this is a special function which is automcatically 
invoked when a struct instance goes out of scope.
- **Static**: static members are tied to the struct itself, not individual instances. It can be called 
shared memebers;
- **This is not OOP**: While the syntax seems like OOP, however, it's not. It's just `struct` with extra 
features, no inheritance or polymorphism is supported.

```kh [syntax]
struct identifier{
  # members...
};
```


#### Example
```kh
struct Vect2{
  float x;
  float y;
};

int main(string args[]){

  Vect2 u = Vect2();
  u.x = 3;
  u.y = 4;

  return 0;
}
```

This is boring, isn't it? But that's not all, we have a lot more to go!
