declare const build: unique symbol;
type Builder = {
    [build]: () => string,
    [k: string]: Builder;
}