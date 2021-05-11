// IMPORT MODULES under test here:
import { renderInstruments } from '../products/render-instruments.js';


const test = QUnit.test;
QUnit.module('Render Instrument');


test('renders a guitar', assert => {
    // arrange
    const guitar = {
        id: 'guitar',
        name: 'Guitar',
        image: 'electricGuitar2.png',
        description: 'Solid Body strat',
        category: 'string-instrument',
        price: 200,
    };
    
    const expected = '<li class="string-instrument box" title="Solid Body strat"><h3>Guitar</h3><img src="../assets/electricGuitar2.png" alt="Guitar image" class="sellingImg"><p class="price">$200.00<button value="guitar">Add</button></p></li>';

    // act
    const dom = renderInstruments(guitar);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('renders a bass guitar', assert => {
    // arrange
    const bassGuitar = {
        id: 'bassGuitar',
        name: 'Bass Guitar',
        image: 'bassGuitar2.png',
        description: 'Solid body Electric Bass',
        category: 'string-instrument',
        price: 150,
    };
    
    const expected = '<li class="string-instrument box" title="Solid body Electric Bass"><h3>Bass Guitar</h3><img src="../assets/bassGuitar2.png" alt="Bass Guitar image" class="sellingImg"><p class="price">$150.00<button value="bassGuitar">Add</button></p></li>';

    // act
    const dom = renderInstruments(bassGuitar);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
