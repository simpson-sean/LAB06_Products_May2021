export default { renderInstruments };

export function renderInstruments(instrument) {
    const li = document.createElement('li');
    li.classList.add(instrument.category);
    li.title = instrument.description;

    const h3 = document.createElement('h3');
    h3.textContent = instrument.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${instrument.image}`;
    img.alt = `${instrument.name} image`;
    img.classList.add('sellingimg');
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${instrument.price.toFixed(2)}`;

    const btn = document.createElement('add-button');
    btn.textContent = 'Add';
    btn.value = instrument.id;
    p.appendChild(btn);

    li.appendChild(p);
    return li;
}