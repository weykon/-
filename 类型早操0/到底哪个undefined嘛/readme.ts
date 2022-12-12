// 假定结构
// assume struct
type AA = { BB?: Boolean | undefined }

// 检查类型小函数
// type function utility
type CheckAABB<T> = T extends { BB: infer R }
    ? R extends undefined
    ? "Value undefined"
    : R
    : "BB unassigned"

// 试验一下
// test room
const aa = {}
const bb = { BB: undefined }
const cc = { BB: false }
type ResultA = CheckAABB<typeof aa>
type ResultB = CheckAABB<typeof bb>
type ResultC = CheckAABB<typeof cc>