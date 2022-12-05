const changeAuto = document.querySelector('#changeAuto');
const out = document.querySelector('.out');
out.textContent = changeAuto[changeAuto.selectedIndex].textContent;

const getData = async (val) => {

    let response = await fetch('cars.json');
    let cars = await response.json();
    val = val.toLowerCase();

    cars['cars'].forEach(elem => {
        if (elem.brand === val) {
            out.innerHTML = `<p>Тачка: ${elem.brand} ${elem.model}</p>
                <p>Цена: ${elem.price}</p>
                `;
        }
    });

};


changeAuto.addEventListener('change', ({ target }) => {
    if (target.selectedIndex === 0) {
        out.textContent = target[target.selectedIndex].textContent;
    } else {
        getData(target[target.selectedIndex].value);
    }

});

