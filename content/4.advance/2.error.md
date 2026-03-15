---
title: Errors
description: Beautiful way to handle errors!
navigation:
  icon: i-lucide-code-xml
---


## Error Handling

```kh [syntax]
return_type identifier(parameter) error_type {

}
```

- This syntax allows us to return an error code on failure.
- In this case, the `return_type` and `error_type` will be wrapped in an union behind the scene, which means only one block of memory will be allocated.
- `error_type` must be defined using `enum` type
- `error_type` is optional, however compiler will enforce checking if used
- One function can have only one unique `error_type` enum. 
- Attempting to return a value that does not match the function's declared `return_type` or any of its `error_type ` will result in compilation error.

**Example:**
```kh
enum MathError {
  DivideByZero,
  LogZero,
  LogNegativeNumber,
  # ...
}

float divide(float a, float b) MathError {
  
  if(b == 0) 
    return MathError.DivideByZero;
  
  return a / b;
} 

int main(){

  float result1 = divide(12, 3) otherwise (MathError error){
    print(error.name);
  }


  float result2 = divide(12, 3) otherwise (error){  # <- MathError type specification is optional
    if(error = MathError.DivideByZero){
      print("cannot divide by zero\n");
    } 
  }

  return 0;
}

```