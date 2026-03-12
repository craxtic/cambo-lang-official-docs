---
title: Enum
description: A user-defined type that improve readability.
navigation: 
  icon: i-lucide-code-xml
---


## Overview
An enum is a special user-defined type that represents a group of constants.

```kh [syntax]
enum identifier{
  IDENTIFER,
  IDENTIFER,
  ...,
  IDENTIFER
}
```
::tip
You can also assign a value to a constant.
::
```kh [syntax]
enum identifier{
  IDENTIFER = value,
  IDENTIFER = value,
  ...,
  IDENTIFER = value
}
```


### Example
```kh
enum Level { Low, Medium, High } 

int main(string args[]){
  
  Level current_level = Level.Low;

  return 0;
}

```


::note
**Note**
- Cambo is strongly typed, so is `enum`.
- Although each constant has its own integer value, they cannot be process directly with other integer types.
- Two enum values with the same integer value are not considered equal if they belong to different enum types.
::

```kh
enum Level {Low, Medium, High}
enum Color {Red, Yello, Green}

int main(string args[]){
  
  Level current_level = Level.Low;
  if(current_level == Color.Red){
    # this won't execute!
  }

  current_level = Color.Red;  # error!
  int color_code = Color.Red; # error!

  return 0;
}
```

`Level.Low` and `Color.Red` holds the same integer value, 0. But the condition will never be true because they belong to different enum type, Level and Color.


## Enum's value
You may have already read the code above, we can not process the constant directly, however we do have a way to access the value of each constant.

```kh
enum Level {Low, Medium, High}
enum Color {Red, Yello, Green}

int main(string args[]){
  
  int a = Level.Low.value;
  int b = Color.Red.value;

  if(Level.Low.value == Color.Red.value){
    # this will execute.
  }

  return 0;
}
```

All code above are valid, and can execute without problems!

