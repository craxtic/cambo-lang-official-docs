---
title: syscall
description: Invoke a system call with one line!
navigation:
  icon: i-lucide-code-xml
---

A [system call](https://en.wikipedia.org/wiki/System_call) is the programmatic way in which a computer program requests a service from the operating system kernel on which it is executed. System call is the only one who makes actions like I/O operations, file managment, memeory allocation, and any other things possible. It's the backbone of the implementation of the entire **standard library**.

Normally, invoking a system call requires writing a direct assembly code and that's complicated. However, in Cambo, there exists a keyword to do so, which is `syscall`.

```kh [syntax]
syscall NR (arg0, arg1, arg2, ...)
```
- `NR` is the numeric reference of the syscall
- `arg` are the required arguments, can be none.


### What does syscall do behind the scene?
`syscall` will tell the compiler to generate assembly instructions to invoke a 
system call based on the given arguments. The generated assembly is platform and 
achitecture dependent.
Cambo has the philosophy of write once compile anywhere (WOCA). Inline assembly 
is not portable, so it's forbidden in the language, and syscall keyword is 
used instead. 

**Note**: because all system calls across different platforms and achitectures 
have at most 6 arguments, so `syscall` has only 6 for now, from arg0 to arg5.


### Example #1
Below is an example of invoking syscall `exit()` for Linux x86_64.
```kh
int main(string args[]){

  syscall 0x3c (0);

}
```
On Linux x86_64, the NR for exit is 0x3c or 60, taking one argument which is the 
error code.


### Example #2
Here is another syscall `write()`;
- NR: 0x01
- arg0: file descriptor
- arg1: buffer
- arg2: size of buffer

```
int main(string args[]){

  int written_bytes = syscall 0x1 (1, "hello, world\n", 13 );
  

  return 0;
}
```
- We want to write to stdout (terminal), and stdout has file descriptor of `1`
- `"hello, world\b"` is the buffer.
- If we count each character one by one in `hello, world\n`, we will get 13 which 
is length of the string.
- `write()` returns the number of written bytes on success, or -1 on error, so we 
assign it to `written_byte`; 
- `hello, world` should be output to the terminal when this program is run


::note
Note
- The above code example is not safe and not recommended.
- `syscall` does not check the types of arguments, must handle carefully.
- `syscall` serves as a bridge to request services directly from the kernel, and
should only be used in the low-level standard libraries with proper implementation.
::







