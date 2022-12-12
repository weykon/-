type PropsA = {
    foo: true
  }
  
  type PropsB = {
    bar: true
  }
  
  type FnA = (props: PropsA) => string
  type FnB = (props: PropsB) => string
  
  const implA: FnA = (props: PropsA) => { return String(props.foo) }
  const implB: FnB = (props: PropsB) => { return String(props.bar) }
  
  const mappy = {
    a: implA,
    b: implB
  }
  
  type TestParams<T extends keyof typeof mappy> =
    T extends unknown
      ? [key: T, props: Parameters<typeof mappy[T]>[0]]
      : never
  
  function test<T extends keyof typeof mappy>(...[key, props]: TestParams<T>) {
    if (key === 'a') {
      // This doesn't work in TS v4.8 because it has a bug with destructured argument narrowing
      // But it does work in TS v5.0 nightly, which fixes that bug
      // It works here because it's narrowed.
      mappy[key](props)
    }
    // This doesn't work because at this point nothing is narrowed and the parameters are expected
    // to be an intersection.
    mappy[key](props)
  
    // There's no good solution for this but you can typecast the call if you need it.
    mappy[key](props as never)
  
    console.log(key, props)
  }
  
  test('a', { foo: true })
  
  test('b', { bar: true })
  
  test('b', { foo: true })
  
  test('a', { bar: true })
  