document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        });

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');
            const breeds = Object.keys(data.message);

            breeds.forEach(breed => {
                const breedItem = document.createElement('li');
                breedItem.textContent = breed;
                dogBreedsList.appendChild(breedItem);
            });
        });

    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue';
        }
    });

    const breedDropdown = document.getElementById('breed-dropdown');
    const dogBreeds = document.getElementById('dog-breeds').getElementsByTagName('li');

    breedDropdown.addEventListener('change', event => {
        const selectedLetter = event.target.value;

        Array.from(dogBreeds).forEach(breed => {
            if (breed.textContent.startsWith(selectedLetter)) {
                breed.style.display = 'block';
            } else {
                breed.style.display = 'none';
            }
        });
    });
});
