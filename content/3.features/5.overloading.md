---
title: Overloading
description: Sharing is caring!
navigation:
  icon: i-lucide-code-xml
---

## Function Overloading
Overloaded functions are funtions that share exact same name but different parameters. And each function 
has its own unique signature. A signature is the combination of the function's name and parameters.    
signature = name + parameters  

#### Example
```kh
int add(int a, int b){
  return a + b;
}

int add(int a, int b, int c){
  return a + b + c;
}
```
In this example, we define two functions sharing the same name, but each has different signature because
of the different parameters. And you can define many functions sharing the same name as many as you want 
as long as they have different parameters.  
  

Now look at another example

```kh
int add(int a, int b){
  return a + b;
}

float add(int a, int b){
  return a + b;
}
```
However, this will cause compilation error becuase two functions sharing the same signature exist at the 
same scope. Although they have different return types, it does not change the function signature as long as 
the parameters stay the same.  
   
::note 
The parameters only make the signiture different only when:
- changes in type.
- changes in number of parameters.  
::

```kh
void func(int a, float b){
  # code ...
}

void func(int x, float y){
  # code ...
}

void func(float m, int n){
  # code ...
}
```
::caution
The different identifiers or order of the parameters do not differ the signature. Which means the signatures of the three functions `func` above are the same, and this will result in compilation error.
::


## Operator Overloading
coming soon ...