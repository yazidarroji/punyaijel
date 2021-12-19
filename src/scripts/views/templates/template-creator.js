import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="card-body">
<h4 class="title text-center mt-5" tabindex="0">
  Selamat datang di BooKu!
</h4>
</div>
  
  `;
const createHomeTemplate = () => `
<div class="card-body">
<h4 class="title text-center mt-5" tabindex="0">
  Selamat datang di BooKu!
</h4>
</div>
  
  `;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="list_item">
    <img class="list_item_img lazyload" data-src="${API_ENDPOINT.IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="list_item_city">${restaurant.city}</div>
    <div class="list_item_content">
      <p class="list_item_rating">Rating: 
        <span>⭐️ ${restaurant.rating}</span>
      </p>
      <h3 class="list_item_name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p class="list_item_desc">${restaurant.description.slice(0, 100)}...</p>
    </div>
  </div>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>`;

const createFormReviewTemplate = () => `
<form action="/#/home">
  <div class="form-input">
    <span><i class="fa fa-user-o"></i></span>
    <input type="text" name="name" id="inputName" placeholder="email">
  </div>
  <div class="form-input">
    <span><i class="fa fa-key"></i></span>
    <input type="password" name="review" id="inputReview" placeholder="Password" aria-label="input Password">
  </div>

  <div class="mb-3">
    <button type="submit" class="submit btn btn-block">Masuk</button>
  </div>

  <div class="text-center">
    Belum memiliki akun? 
    <a
      href="/#/register"
      class="link"
      aria-label="klik di sini jika kamu belum memiliki akun"
      >Daftar</a
    >
  </div>
</form>
  `;

export {
  createHomeTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createFormReviewTemplate,
};
