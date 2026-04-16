import { getLista } from "./lista";

export function setupRootApp() {
  const divRoot = document.createElement("div");
  divRoot.append(criaTitulo());
  divRoot.append(criaForm());
  divRoot.append(criaLista());
  return divRoot;
}

function criaLista() {
  const div = document.createElement("div");

  const btnAtualizar = document.createElement("button");
  btnAtualizar.id = "atualizar";
  btnAtualizar.textContent = "Atualizar";
  div.append(btnAtualizar);

  const ol = document.createElement("ol");
  ol.id = "lista";
  div.append(ol);
  return div;
}

function criaTitulo() {
  const h1 = document.createElement("h1");
  h1.textContent = "App de lista";
  return h1;
}

function criaForm() {
  const divForm = document.createElement("div");
  const form = document.createElement("form");
  form.name = "entrada"
  divForm.append(form);
  const input = document.createElement("input");
  input.name = "texto";
  form.append(input);
  const button = document.createElement("button");
  button.textContent = "Adicionar";
  form.append(button);
  setupFormSubmit(form);
  return divForm;
}

function setupFormSubmit(form){
  form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    console.log("Formulário enviado!!");
    console.log(document.entrada.texto.value);
    document.entrada.texto.value = "";
    document.entrada.texto.focus();
    

  })
}

export function setupEvents(root){
  const btnAtualizar = root.querySelector("#atualizar");
  const ol = root.querySelector("ol");
  btnAtualizar.addEventListener("click", ()=>{
    const lista = getLista();
    ol.innerHTML = "";
    for(let i=0; i<lista.length; i++){
      const li = document.createElement("li");
      li.textContent = lista[i];
      ol.append(li);
    }
  });
}
