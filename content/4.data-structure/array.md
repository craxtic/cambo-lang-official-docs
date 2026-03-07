---
title: Array
description: A collection of data of a specific type.
navigation: 
  icon: i-lucide-code-xml
---

An array is a fixed-sized sequential collection of elements of the same data type.

**Important note:**
- An array can not have more than one type.
- Its index starts at 0.
- Its size must be known at compile time.


## One Dimentional Array

```kh [syntax]
type identifier[size] = [element, element, ..., element];
```
::tip
`size` is optional, the compiler will infer if not specified.
::


```kh [syntax]
type identifier[size];
identifier = [element, element, ..., element];
```
::note 
`size` must be specified if this syntax is used.
::





**Example:**
```kh
int32 primes[] = [2, 3, 5, 7, 11, 13];
string names[] = ["Sreang", "Hai", "Nha"]; 
```

To access one of an array's element, we start with array name followed by an index wraped by squre bracket `[]`

```kh
int main(string args[]){

  int32 primes[] = [2, 3, 5, 7, 11, 13];
  
  print("the first element: {}", primes[0]);
  print("the second element: {}", primes[1]);
  print("the last element: {}", primes[primes.size() - 1]);  
  
  string names[] = ["Sreang", "Hai", "Nha"]; 
  
    

  return 0;
}
```




## Array Properties
In Cambo, you can manipulate the array using some built-in functions listed below:
- `size()` return the number of element of an array.
- `last()` return the last element of an array.
- `reverse()` reverse the element of an array. 
- `clear()` set all elements to default values, typically zero.
- `fill(value)` fill each element of an array with specific value.
- `swap(index, index)` swap the values of two elements using their indices.

**Example:**
```kh
int main(string args[]){

  int32 primes[] = [2, 3, 5, 7, 11, 13];

  print("size: {}", primes.size()); # 6
  print("last: {}", primes.last()); # 13 

  primes.reverse();
  print("primes: {}", primes); # [13, 11, 7, 5, 3, 2]

  primes.reverse(); # reverse back to original

  primes.swap(0, 2);
  print("primes: {}", primes); # [5, 3, 2, 7, 11, 13]

  primes.clear();
  print("primes: {}", primes); # [0, 0, 0, 0, 0, 0]

  primes.fill(2);
  print("primes: {}", primes); # [2, 2, 2, 2, 2, 2]

  return 0;
}

```


::note
**Note**
- These functions are not attached to the array itself, they are static methods defined within a built-in struct `Array` from the stdlib.  
- The syntax `primes.reverse()`, `primes.clear()` and others are just operator overloadings and will be transformed into `Array.reverse(primes)`, `Array.clear(primes)` and so on by the compiler.
::

## Multidimentional Array
A Multidimentional is an array of arrays, basically it is a nested array. Due to the static typing system, a multidimentional arrays in Cambo must have one same fixed size for each of its inner arrays.

**Example:** In the code below, we're going to create a 2D and 3D array as they are more common than any other higher dimentional arrays.
```kh
int main(string args[]){

  int8 array_2D[][] = [
    [0, 1, 3, 5],
    [3, 2, 1, 0],
    [-1, 2, 5, 9],
  ];

  int8 array_3D[][][] = [
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [7, 8, 9],
      [1, 2, 3]
    ]
  ]; 

  print("{}", array_2D[1][3]);    # 0
  print("{}", array_3D[0][0][2]); # 3
  
  return 0;
}
```


## Visualizing Multidimensional Arrays
We can easily visualize the first three dimensions:
- **1D Array**: A linear sequence of data points.
- **2D Array**: A grid or matrix of data arranged on a plane.
- **3D Array**: A box or cube of data consisting of rows, columns, and layers in space.

**However**, can we define higher-dimensional arrays, such as 4D or 5D? \
The answer is **yes**. Since humans cannot easily visualize shapes beyond three dimensions, we must shift our perspective. Instead of viewing them as shapes, we should see an array as a nested list. Under this logic, an
n-dimensional array is simply a list of
(n-1)-dimensional arrays. \
**For example,** a 4D array is just a linear sequence of 3D boxes. Interestingly, this mirrors certain theories: if our universe follows this logic, the 4th dimension is simply a sequence of 3D space linked together linearly. 5th dimention is just a matrix of 3D space and so on. How interesting!