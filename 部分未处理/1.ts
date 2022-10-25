namespace unsettle {
    type Base = {
        a: string,
        x: number,
        y: number,
    }
    type Example<T> = T extends { b?: string, c?: string } ?
        T extends { d: string } ? never : T & Base
        : T & Base

    const check: Example<{ b: string }> = {
        b: '',
        x: 1,
        y: 1,
        a: ''
    }

    type ExampleFoo = Example<{ foo: string }>
    type ExampleBoo = Example<{ boo: string }>

    function isC_Exist(o: Example<{ c?: string }>): o is Example<{ c: string }> {
        return o.c !== undefined
    }

    if (isC_Exist(check)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
