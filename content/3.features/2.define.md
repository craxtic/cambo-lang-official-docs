---
title: Define
description: Define alias for anything.
navigation:
  icon: i-lucide-code-xml
---

```kh [syntax]
define new_type = existed_type;
```


**Example:**
```kh
define i8 = int8;
define i16 = int16;
define i32 = int32;
define i64 = int64;
define i128 = int128;
```
You can alias any types you want, including built-in and user-defined types.

**Example:** Aliasing becomes really useful when you want to simplify a long complex type name.
```kh

define DictSS = const Dict<string, string>;
DictSS data1 = {
  # code ...
}

DictSS data2 = {
  # code ...
}
```
