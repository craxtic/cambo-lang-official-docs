---
title: Loops
description: A way to automate repetitive tasks.
navigation: 
  icon: i-lucide-code-xml
---

This page shows you how to control the flow of your code using different kind of loops in Cambo.

There are 3 types of loop you can use:
- `while` loop
- `repeat while` loop 
- `for` loop





## While Loop
To use while loop, you start with a `while` keyword followed by a valid condition. 
```kh [syntax]
while(condition){
  # code ...
}
```

**Example:**
```
while(2 < 4){
  print("always true");
}
```
`always true` will be repeatedly printed infinite times because the condition `2 < 4` is always true.

## Repeat While Loop
Unlike `while` loop, `repeat while` loop executes the block of code once before checking the condition to decides whether the cycle should continue or terminate. 


```kh [syntax]
repeat {
  #code ...
}while(condition);
```

**Example:** 
```kh [code]
int i = 0;
repeat{
  print("hello, new world\n");
  i++;
} while(i < 10);
```


::note
`repeat-while` loop is entirely the same as `do-while` loop in most other programming languages, the difference is just the keyword `do` is changed to `repeat`. 

::

## For Loop
`for` loop is another control flow that repeatedly executes based on a header that consists of 3 different functional parts.
- **Initialization**: executed once before the loop begins, this part typically defines a loop control variable.
- **Condition**: a boolean expression evaluated before each iteration to determine whether the iteration should continue or not.
- **Updation**: executed at the end of each iteration, this part modifies the loop control variable, usually to move the loop closer to its termination state. 
```kh [syntax]
for(initialization; condition; updation){ 
  # code ...
}
```

**Example:**
```kh
for(int i = 0; i < 10; i++){
  print("hello, world!");
}
```
In the typical `while` loop you normally write:
```kh
int i = 0;
while(i < 10){
  print("hello, world\n");
  i++;
}
```

`for` loop is simply like a shortcut that you can write your `while` loop in fewer lines of code!


::warning
The `condition` must be a valid boolean expression, others such as assignment is not allowed and shall result in compilation error.
::


