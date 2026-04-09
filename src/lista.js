let lista = [];

export function iniciaLista(){
    lista = ["um", "dois", "três"];
}

export function getLista(){
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}