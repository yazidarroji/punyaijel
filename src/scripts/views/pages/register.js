/* eslint-disable no-console */
import UrlParser from '../../routes/url-parse';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/register';
import LikeButtonPresenter from '../../utils/button-register';
import FormReviewInitiator from '../../utils/form-register';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Register = {
  async render() {
    return `
    <div class="loader">
      <div class="dot-pulse"></div>
    </div>
    <div class="detail" id="item" tabindex="0"></div>
    <div class="detail-form">
      <div id="formReviewContainer"></div>
    </div>
    <div id="likeButtonContainer"></div>`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.detail');
    const loading = document.querySelector('.loader');
    const review = document.querySelector('.detail-form');
    review.style.display = 'none';
    try {
      const data = await RestaurantDbSource.detailRestaurant('rqdv5juczeskfw1e867');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
      loading.style.display = 'none';
      review.style.display = 'block';
      const skipLinkElem = document.querySelector('skip-to-content');
      skipLinkElem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#item').focus();
      });
      await FormReviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: data.restaurant.id,
      });
    } catch (error) {
      loading.style.display = 'none';
      restaurantContainer.innerHTML = '<p class="error-message">refresh your browser</p>';
    }
  },
};

export default Register;
