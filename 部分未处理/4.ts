const inferSymbols = < Syms extends Array<symbol>>(...symbols: Syms) => {}

const a = Symbol()
const b = Symbol()
inferSymbols(a, b)


const inferSymbol = <Sym extends symbol>(...symbols: Sym[]) => { }
const inferString = <Str extends string>(...strings: Str[]) => { }
const inferNumber = <Num extends number>(...numbers: Num[]) => { }
type Combind = typeof a | typeof b
const c = Symbol('a')
const d = Symbol('b')
inferSymbol(c, d) // I expect this is ok, but it isn't
inferSymbol<Combind>(a, b)

inferString('a', 'b')
inferNumber(1, 2)
