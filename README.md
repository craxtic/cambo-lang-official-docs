# Cambo Programming language documentation

> A hobby project! \
> Visit the site: https://craxtic.org

This is the official [Cambo](https://craxtic.org/) documentation site that provides everything you need to know about this programing langauge. 



## What is Cambo?

Cambo is high-level, general-purpose, multi-paradigm programming language designed to be simple yet powerful for any developments. It is a statically and strongly typed language whose syntax is influenced by modern langauges.
One of the main purpose of this creation is to design an entirely new modern language with the simplicity of C and the capibility of C++ and other powerful languages. \
_One thing to keep in mind is that this langauge is originally just a hobby project, founded by [a guy]() who is fascinated by the elegance of language design._


## Key Features

This language includes a range of features such as

- **Typing system**: static and strong by nature.
- **Error handling**: a very beatiful way to handle the error in the develpment.
- **Struct**: unlike in C, where you can only have variables as members of the struct, in Cambo, you can define a constructor, a destructor and methods within the [struct](). 
- **Native code**: source code are compiled direcly to native machince code.
- **more...**


> [!TIP]
> This site was built with Nuxt Content, you can also download this site and run locally on your computer!


## Offline docs
To run this site locally on your computer, you can either downloard the ZIP or clone it with command below:
```bash
git clone https://github.com/craxtic/cambo-lang-official-docs.git
```

Then run: 
```bash
# install dependecies
npm ci

# build 
npm run build
```

The built files will be in the `.output` directory, ready to run on your computer!.
```bash 
node .output/server/index.mjs
```
Your documentation site will be running at `http://localhost:3000`
