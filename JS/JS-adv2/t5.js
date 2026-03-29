'use strict';
import fetchData from './modules/fetchData.js';
import restaurantModal from './modules/restaurantModal.js';
import restaurantRow from './modules/restaurantRow.js';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');
const filterButtons = document.querySelectorAll('.filter-btn');

// Näyttää virheviestin modalissa
const showErrorModal = (message) => {
    modal.innerHTML = '';
    const errP = document.createElement('p');
    errP.className = 'modal-error';
    errP.textContent = message;
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.textContent = 'Sulje';
    closeBtn.addEventListener('click', () => modal.close());
    modal.append(errP, closeBtn);
    modal.showModal();
};

// Lisää sulkunappi modalin loppuun
const addCloseButton = () => {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.textContent = 'Sulje';
    closeBtn.addEventListener('click', () => modal.close());
    modal.append(closeBtn);
};

(async () => {
    let restaurants;
    try {
        restaurants = await fetchData(apiUrl + '/restaurants');
    } catch (error) {
        showErrorModal(`Ravintoloiden haku epäonnistui: ${error.message}`);
        return;
    }

    // Aakkosjärjestys
    restaurants.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    );

    // Luodaan rivit ja tallennetaan company-tieto filtteröintiä varten
    const rows = [];

    for (const restaurant of restaurants) {
        const tr = restaurantRow(restaurant);

        tr.addEventListener('click', async () => {
            document.querySelectorAll('.highlight').forEach(el =>
                el.classList.remove('highlight')
            );
            tr.classList.add('highlight');

            modal.innerHTML = '';
            modal.showModal();

            try {
                const pMenu = await fetchData(
                    apiUrl + `/restaurants/daily/${restaurant._id}/fi`
                );
                const modalDOM = restaurantModal(restaurant, pMenu);
                modal.append(modalDOM);
            } catch (error) {
                const nameH3 = document.createElement('h3');
                nameH3.textContent = restaurant.name;
                const errP = document.createElement('p');
                errP.className = 'modal-error';
                errP.textContent = `Menua ei saatu: ${error.message}`;
                modal.append(nameH3, errP);
            }

            addCloseButton();
        });

        taulukko.append(tr);
        rows.push({tr, company: restaurant.company});
    }

    // Filtteröinti company-napin mukaan
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const company = btn.dataset.company;
            rows.forEach(({tr, company: comp}) => {
                tr.style.display =
                    company === 'all' || comp === company ? '' : 'none';
            });
        });
    });
})();