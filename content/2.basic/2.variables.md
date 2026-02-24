---
title: Variables
description: Learns about Cambo variables
navigation: 
  icon: i-lucide-code-xml
---

## Declaration & Initialization
Below are the basic syntax to declare and initialize a variable.
```
type identifier;
```

```
identifier = value;
```

```
type identifier = value;
```

::note
If a variable is declared without initialization, it will be automatically set to zero or an equivalent value, such as `\0`, `null`, etc.
::

::accordion

:::accordion-item{label="What is the difference between declaration & initialization??" icon="i-lucide-circle-help"}
- Declaring a variable means creating a variable by specifying its name and type, without assigning a value to it, `int number;`. 
- Initializing a variable means assigning a value to a varible for the first time, `number = 3;`
:::
::

## Basic types
In Cambo, there are many different kinds of [data types](), however here are some basic ones:
- **int** : stores integers, whole number, such as 1975 or -1975.
- **float**: stores floating point numbers, with decimals, such as 19.70 or - 19.70.
- **bool**: stores values with two state: true or false.
- **char**: stores single characters, such as 'A', or 'a', values are surrounded by single quote `''`.
- **string**: stores text, such as "Khmer", strings are surrounded by double quote `""`.

::note
**string** is not a originally a primitive data type, it's a built-in struct in Cambo.
::

## Example
```kh
int number = 12;
number = 99; # assign a new value
```
Other types:
```kh
float num = 3.14;
bool running = false;
char = 'A';
string = "hello, world!";
```
