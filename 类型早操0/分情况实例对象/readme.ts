interface Normal {
    category: string
    [k: string]: string
}
type GetObject<T = Normal> = T extends Mod0 ?
    T
    : T extends Mod1 ? T : T

type Mod0 = {
    category: string
    officeId: string
}
type Mod1 = {
    category: string
    companyId: string,
}
const check: GetObject<Mod0> = {
    category: 'Foo',
    officeId: 'boo',
}
const check1: GetObject<Mod1> = {
    category: 'Foo',
    companyId: 'boo',
}
const check2: GetObject = {
    category: 'foo',
    ad: 'ad'
}
