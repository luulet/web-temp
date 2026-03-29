const teeMenuHTML = (courses) => {
    const container = document.createElement('div');

    for (const course of courses) {
        const {name, price, diets = []} = course;

        const article = document.createElement('article');
        article.className = 'course';

        const nameP = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = name || 'Ei ilmoitettu';
        nameP.append(strong);

        const priceP = document.createElement('p');
        priceP.textContent = `Hinta: ${price || 'Ei ilmoitettu'}`;

        const dietsP = document.createElement('p');
        const allergeenit = diets.reduce((acc, diet) => {
            let ikoni;
            switch (diet) {
                case 'G': ikoni = '🌾🚫'; break;
                case 'A': ikoni = '🍔';   break;
                default:  ikoni = '🌿';   break;
            }
            return acc + ' | ' + ikoni;
        }, '');
        dietsP.textContent = `Allergeenit:${allergeenit || ' –'}`;

        article.append(nameP, priceP, dietsP);
        container.append(article);
    }

    return container;
};

export default teeMenuHTML;