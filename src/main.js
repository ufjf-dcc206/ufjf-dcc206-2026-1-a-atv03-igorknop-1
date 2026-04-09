import './style.css'
import { setupEvents, setupRootApp } from './setupRootApp.js'
import { iniciaLista } from './lista.js';

const app = document.querySelector('#app');
iniciaLista();
app.append(setupRootApp());
setupEvents(app);