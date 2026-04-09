const lista = ["um", "dois", "três"];

export function getLista(){
    return structuredClone(lista);
}