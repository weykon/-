const foo = Symbol('foo')
const bar = Symbol('bar')
type Type = typeof foo | typeof bar

const fn: { [i in symbol]: () => boolean } = { [foo]: () => true }
function foobar(type: Type) {
    if (fn[type] && fn[type]()) {
    }
}

// source 
const foo = Symbol('foo')
const bar = Symbol('bar')
type Type = typeof foo | typeof bar

const fn: { [i in symbol]: () => boolean } = { [foo]: () => true }
function foobar(type: Type) {
    if (fn[type] && fn[type]()) {
    }
}