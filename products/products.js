import instruments from '../data/instruments.js';
import { renderInstruments } from './render-instruments.js';

const ul = document.getElementById('instruments');
//console.log(instruments);

for (const instrument of instruments) {
    const el = renderInstruments(instrument);
//    console.log(el);
    ul.appendChild(el);
}