# node issues

## `__dirname` 是什么

当前模块(代码文件)所在目录的绝对路径, 参见代码 `try-dirname-filename-cwd`

## `__filename`

当前模块(代码文件)的路径及文件名称

## `process.cwd()`

node.js 执行时所在的目录路径:

```sh
node ./try-dirname-filename-cwd/main.js     # /Users/xvno/blog/samples/nodejs
node ./main.js                              # /Users/xvno/blog/samples/nodejs/try-dirname-filename-cwd
```


## 目录结构

```sh
# $tree -f -L 4
tree
.
└── nodejs
    ├── issue.md
    └── try-dirname-filename-cwd
        ├── main.js
        └── src
            └── lib
                └── tim.js
```
