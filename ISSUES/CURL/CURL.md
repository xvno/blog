# Chapter-01

## Headers

### -H 请求中添加 Headers

1. 用 `-H` 引导, 每个 `-H` 引导一个合法的头信息
2. 该请求头应该用 `双引号` 包裹
3. 用分号 `;` 引导一个空值头部
4. 用带冒号 `:` 且不带值得头来删除一个头部

```sh
# 1,2. 用 -H 引导双引号包裹的一个头部
curl -H "Accept: text/plain" -H "user-agent: user-friendly agent the great CURL" http://localhost:3333/
# 3. 空头部
curl -H "Accept: text/plain" -H "nonce;" http://localhost:3333/
# 4. 删除请求头
curl -H "Accept:" -H "user-agent:" http://localhost:3333/
```

#### Content-Type

text/plain
text/html
text/css
text/xml

application/json
application/x-www-form-urlencoded
application/octet-stream

application/pdf
application/zip
application/gzip

multipart/form-data
multipart/mixed
multipart/encrypted

audio/mp4
audio/ogg
audio/webm

### -A 指定 user-Agent

```sh
curl http://localhost:3333 -A "Mozilla/5.0 (X11; Linux x86_64; rv:58.0) Gecko/20100101 Firefox/58.0"
```

### -v/-s -L

-v: 显示交互详情, 可以用 --trace-time 来显示时间
-s: 与 -v 相反, 不显示
-L: 跟随重定向

### -F 指定 multipart/form-data 的字段

```sh
curl -F 'name=vno' -F 'password="PassW0rd"' http://localhost:3333/
# ctx.request.fields: { name: 'vno', password: 'PassW0rd' }
```

### -u 附加用户账户密码

```sh
curl -u xvno:0n3Mor3Tim3 http://localhost:3333
```
