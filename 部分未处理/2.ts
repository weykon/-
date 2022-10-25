// https://discord.com/channels/508357248330760243/1033650691706720327/1033678991325933628

function AnimalCtor(this: ThisType<Animal>, type: string, habitat: string) {
    //@ts-ignore    
    this.type = type;
    //@ts-ignore  
    this.habitat = habitat;
    //@ts-ignore
    return this;
}

type Animal = { type: string, habitat: string }
const createAnimal = (type: string, habitat: string) => {
    let obj = {} as any
    AnimalCtor.apply(obj, [type, habitat]);
    return obj
}
console.log(createAnimal('dog', 'house'))