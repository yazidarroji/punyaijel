/* eslint-disable no-alert */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-underscore-dangle */
import RestaurantDbSource from '../data/restaurantdb-source';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer }) {
    this._formReviewContainer = formReviewContainer;
    this._id = 'rqdv5juczeskfw1e867';
    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormReviewTemplate();
    const button = document.querySelector('.submit');
    button.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');
      const form = document.querySelector('form');
      const data = {
        email: inputName.value,
        password: inputReview.value,
        csrf: 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz',
      };
      if (inputName.value === '') {
        alert('please input your name');
      } else if (inputReview.value === '') {
        alert('please input your password');
      } else {
        await RestaurantDbSource.reviewRestaurant(data);
        form.reset();
	      this._renderReview(data,'pengen nyari data respon');
      }
    });
  },

  _renderReview(data) {

    console.log(data,'AFTER RENDER NYARI TOKEN');
    // const reviewContainer = document.querySelector('.reviews');
    // const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    
    // const dataReview = `
    // <div class="review-item">
  
    // </div>`;
    // console.log(dataReview,'inipunya aku');

    // reviewContainer.innerHTML += dataReview;
  },
};

export default FormReviewInitiator;
