let lista = [];

export function iniciaLista() {
  lista = ["um", "dois", "três"];
}

export function getLista() {
  return structuredClone(lista);
}

export function limpaLista() {
  lista.splice(0);
}

export function adicionaNaLista(item) {
  if (item.length < 3) return;
  lista.push(item);
}
