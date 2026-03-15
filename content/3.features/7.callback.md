---
title: Callback
description: Call a function later on.
navigation: 
  icon: i-lucide-code-xml
---

Callback is a function passed as an argument into another function, often called higher order function, which is then executed inside the outer function to complete a specific action. 

::tip
See [Lambda](/features/lambda) first!
::

**Example:**
```kh
struct Button {
  void() _clickHandler;
  void onClick(void() handler){
    self._clickHandler = handler;
  }

  # a function to perform clicking
  void click(){
    # code ...
    self._clickHandler();
  }

}


int main(void){

  Button button = Button();
  button.onClick(() => {
    print("hello, button!\n");
    print("hello, world!\n");
  });

  # now we can click the button
  button.click();

  return 0;
}
```
The idea is that we don't know what action to perform when the button is clicked, but we can leave that as a placeholder, which is called a callback, so that the users can pass a function to perform a task, for example printing some text as shown in the above code.
