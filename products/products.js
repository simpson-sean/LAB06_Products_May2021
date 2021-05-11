import { instrumentList } from '../data/instruments.js';
import { renderInstruments } from './render-instruments.js';

const ul = document.getElementById('instruments-list');
//console.log(instruments);

for (const instrument of instrumentList) {
    const el = renderInstruments(instrument);
//    console.log(el);
    ul.appendChild(el);
}