```typescript
type E = {
  element:    string | Element; 
  attributes: object | null; 
  content:    string | null; 
  children:      E[] | null; 
}; 

const E = (
  element:    string | Element, 
  attributes: object | null, 
  content:    string | null, 
  children:      E[] | null, 
): E => {
  return { element, attributes, content, children }; 
}; 
```

怎么做到更加简单的类型检查说明

查看答案
