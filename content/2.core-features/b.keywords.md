---
title: Keywords
description: Explore all vocabularies in Cambo.
navigation:
  icon: i-lucide-code-xml
---

This page serves as an appendix, providing a complete list of all the 52 keywords available in the
language along with their categories and usages. Keywords are highlighted in green color!

::warning
Keywords are reserved by the language and are not permitted to be used as identifiers.
::

::field-group

::field{name="as"         type="Namespace declarer  "}       
Group related code into a named scope.                                                                                                                           
::

::field{name="auto"       type="Type specifier      "}       
Automatically infer a type, including built-in and user-defined types.                                                                                                                                       
::

::field{name="bool"       type="Data type           "}       
Define a variable or function return type that stores true/false.                                                                                                
::

::field{name="break"      type="Termination         "}       
Terminate a loop or switch and jump out of the execution block.                                                                                                            
::

::field{name="case"       type="Control flow        "}       
Match a labeled value and execute a given code in a match control flow.                                                                                       
::

::field{name="char"       type="Data type           "}       
Define a variable or function return type that stores ascii characters, default to 16 bits.                                                                                           
::

::field{name="char16"     type="Data type           "}       
Define a variable or function return type that sotres 16-bit characters                                                                                          
::

::field{name="char32"     type="Data type           "}       
Define a variable or function return type that stores 32-bit characters                                                                                          
::

::field{name="const"      type="Qualifier           "}       
Qualify a variable of any type to be immutable and can be processed at compile time.                                                                             
::

::field{name="continue"   type="Control flow        "}       
Skip the remaining code inside the current iteration and jump to the next cycle of the loop.                                                                     
::

::field{name="define"     type="Alias               "}       
Make an alias for an existing data type or a user-defined type, allowing you to create a simpler version of a complex type.                                      
::

::field{name="default"    type="Argument Specifier  "}       
Indicate a specific argument of a function takes its default value.                                                                                              
::

::field{name="deinit"     type="Function modifier   "}       
Define a destructor of a struct.                                                                  
::

::field{name="else"       type="Control flow        "}       
Define an alternative line or block of code that executes only when the given condition the the corresponding `if` evaluates to false.                           
::

::field{name="enum"       type="User-defined type   "}       
Define a collection of named constants, also know as enumurators.                                                                   
::

::field{name="false"      type="Literal             "}       
Represent the false state of boolean logic.                                                                                                           
::

::field{name="float"    type="Data type           "}       
Define a varible or function return type that stores floating points, default to 32 bits.                                                                                     
::

::field{name="float16"    type="Data type           "}       
Define a varible or function return type that stores 16-bit floating points.                                                                                     
::

::field{name="float32"    type="Data type           "}       
Define a varible or function return type that stores 32-bit floating points.                                                                                     
::

::field{name="float64"    type="Data type           "}       
Define a varible or function return type that stores 64-bit floating points.                                                                                     
::

::field{name="float80"    type="Data type           "}       
Define a varible or function return type that stores 80-bit floating points.                                                                                     
::

::field{name="float128"   type="Data type           "}       
Define a varible or function return type that stores 128-bit floating points.                                                                                    
::

::field{name="for"        type="Control flow        "}       
Define a for-loop system to execute a line or block of code by defining the initial counter, a stay-in condition and an increment step.                          
::

::field{name="import"     type="Module importer     "}       
Load an external module or libary into the current file.                                                                                              
::

::field{name="int"       type="Data type           "}       
Define a variable or function return type that stores integers, defualt to 32 bits.                         
::

::field{name="int8"       type="Data type           "}       
Define a variable or function return type that stores 8-bit integers.                                                                                            
::

::field{name="int16"      type="Data type           "}       
Define a variable or function return type that stores  16-bit integers.                                                                                          
::

::field{name="int32"      type="Data type           "}       
Define a variable or function return type that stores  32-bit integers.                                                                                          
::

::field{name="int64"      type="Data type           "}       
Define a variable or function return type that stores  64-bit integers.                                                                                          
::

::field{name="int128"     type="Data type           "}       
Define a variable or function return type that stores  128-bit integers.                                                                                         
::

::field{name="init"       type="Function modifier   "}       
Define a constructor of a struct.                                                      
::

::field{name="interface"  type="Module interface dec"}  
Declare an interface of a module.                                                                                                                                
::

::field{name="module"     type="Moduel declarer     "}       
Declare a module, typically used at the very first line of a module file.                                                                                             
::

::field{name="null"       type="Literal             "}       
Represent the intentional absence of an object or a reference pointing to nothing, equivalent to void but in pointer context.                                            
::

::field{name="otherwise"  type="Control flow        "}       
Define a fallback line or block of code that executes only when the return value from a function is an error type.                                                                                                                                                                                                   
::

::field{name="return"     type="Control flow        "}       
Exit a function and optionally send a value back to where the function was called.                                                                               
::

::field{name="repeat"     type="Control flow        "}       
Define a line or block of code that executes at least once before checking the given condition and continuing to the next cycle of the loop.  
::

::field{name="static"     type="Modifier            "}       
Define a varible or method that belongs to the struct itself rather than a specific object, and also  preserve a variable's value between function calls. 
::

::field{name="struct"     type="User-defined type   "}       
Define a struct, a custom data type that groups related variables and methods in a one location.                                                                 
::

::field{name="match"      type="Control flow        "}       
Define a matching value mechanism that evaluates a given condition and directly executes the line of block code where the value matches.                         
::

::field{name="string"     type="Data type           "}       
Define a variable or function return type that stores a collection of characters.                                                                                
::

::field{name="syscall"    type="system call invoker "}       
Invoke the system call.                                                                                                                                           
::

::field{name="true"       type="Literal             "}       
Represent the true state of boolean logic.                                                                                                            
::

::field{name="type"       type="Generic type declarer"}       
Define a generic type to implement generic code.                                                                                                                                                                 
::

::field{name="union"      type="User-defined type   "}       
Define a custom data structure whoose members share the same memory location.                                                                                    
::

::field{name="uint8"      type="Data type           "}       
An unsinged version of int8.                                                                                                                                                
::

::field{name="uint16"     type="Data type           "}       
An unsinged version of int16.                                                                                                                                               
::

::field{name="uint32"     type="Data type           "}       
An unsinged version of int32.                                                                                                                                               
::

::field{name="uint64"     type="Data type           "}       
An unsinged version of int64.                                                                                                                                               
::

::field{name="uint128"    type="Data type           "}       
An unsinged version of int128.                                                                                                                                              
::

::field{name="void"       type="Type specifier      "}       
Indicate a function that does not return any value.                                                                                                              
::

::field{name="while"      type="Control flow        "}       
Define a looping system that repeat a line of block of code as long as the given condition is true.                                                              
::

::


