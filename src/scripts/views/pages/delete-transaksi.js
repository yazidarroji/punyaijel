/* eslint-disable no-console */
import TransaksiDB from '../../data/transaksidb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <jumbotron-bar></jumbotron-bar>
    <section class="main__content" id="content" tabindex="0">
      <div class="sub__content">
        <h2 tabindex="0">Explore Restaurant</h2>
        <hr>
        <div class="loader">
          <div class="dot-pulse"></div>
        </div>
        <div class="list" id="items"></div>
      </div>
    </section>
    <gallery-content></gallery-content>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#items');
    const loading = document.querySelector('.loader');
    const gallery = document.querySelector('gallery-content');

    const skipLinkElem = document.querySelector('skip-to-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#content').focus();
    });

    try {
      const restaurants = await TransaksiDB.deleteTransaksi();
    //   loading.style.display = 'none';
    //   gallery.style.display = 'block';

    //   restaurants.forEach((restaurant) => {
    //     restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    //   });
    } catch (error) {
      loading.style.display = 'none';
      console.log(error);
      restaurantContainer.innerHTML = '<p class="error-message">refresh your browser</p>';
    }
  },
};

export default Home;
