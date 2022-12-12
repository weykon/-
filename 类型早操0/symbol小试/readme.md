问题来源：

```typescript 
type Builder = {
    build: ()=>string
    [k: string]: Builder
}
const a: Builder = {build: ()=>"", b: {}} 
// 这里 build 提示错误，“build” 会进入string的判断，要求 build: Builder
```

我们不能使用 “build” extends string ? 这样的判断，它始终是个定式。
我们要么在string层加抽象，要么在“build”层加抽象。

那么最简便的方法是什么？

## 使用Symbol（查看答案）。
