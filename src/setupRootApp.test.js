import { expect, test } from "vitest";
import { atualizarListaNaTela, setupEvents, setupRootApp } from "./setupRootApp";
import { getLista, iniciaLista, limpaLista } from "./lista";

test("Que tenha um título na página", () => {
  const app = document.createElement("div");
  app.append(setupRootApp());
  const h1 = app.querySelector("h1");
  expect(h1.textContent).toBe("App de lista");
});

test("Quando clica no botão atualizar deve ter 3 itens", () => {
  const app = document.createElement("div");
  app.append(setupRootApp());
  iniciaLista();
  setupEvents(app);
  atualizarListaNaTela(app);
  const lista = getLista();
  expect(lista.length).toBe(3);
  const botao = app.querySelector("#atualizar");
  expect(botao.textContent).toBe("Atualizar");
  botao.click();
  const ol = app.querySelector("ol");
  expect(ol.children.length).toBe(3);
});
