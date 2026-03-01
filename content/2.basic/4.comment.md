---
title: Comment
description: How to comment your code!
navigation:
  icon: i-lucide-hash
---

## Comment your code
In Cambo, `#` is used to mark a line as comment, which will never be considered to be part the source code, so the compiler will always skip the line that starts with the character `#`.
```kh
# this is comment
# this is also a comment
```


## Example 
```kh
# this is the main function, where code is executed
int main(string args[]){
  print("hello, world\n"); 

  return 0; # exit program with status 0
}
```