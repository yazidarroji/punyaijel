import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="main__content" id="favoriteContent" tabindex="0">
      <h2 tabindex="0">Your Favorite Restaurant</h2>
      <hr>
      <div class="sub__content">
        <div class="loader">
          <div class="dot-pulse"></div>
        </div>
        <div class="list" id="items"></div>
      </div>
    </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#items');
    const loading = document.querySelector('.loader');
    const subContent = document.querySelector('.sub__content');

    const skipLinkElem = document.querySelector('skip-to-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#favoriteContent').focus();
    });

    if (restaurants.length === 0) {
      subContent.innerHTML = `
      <div class="message">
        <p tabindex="0">Oops! No Data Found. Explore more and add your favorite restaurant</p>
      </div>`;
    }

    loading.style.display = 'none';

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
