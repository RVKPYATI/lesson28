const changeAuto = document.querySelector('#changeAuto');
const out = document.querySelector('.out');
out.textContent = changeAuto[changeAuto.selectedIndex].textContent;

const getData = async (val) => {

    try {
        let response = await fetch('cars.json');
    let cars = await response.json();

    out.innerHTML = `<p>Тачка: ${cars.cars[val - 1].brand} ${cars.cars[val - 1].model}</p>
                <p>Цена: ${cars.cars[val - 1].price} $</p>
                `;
    } catch (error) {
        throw new Error(error);
    }
    

};


changeAuto.addEventListener('change', ({ target }) => {
    if (target.selectedIndex === 0) {
        out.textContent = target[target.selectedIndex].textContent;
    } else {
        getData(target.selectedIndex);
    }

});

