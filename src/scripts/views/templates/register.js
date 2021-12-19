import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  `;
const createHomeTemplate = () => `
<div class="card-body">
<h4 class="title text-center mt-5" tabindex="0">
  Silahkan Register Disini123!
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
    <div class="card-body">
        <h4 class="title text-center mt-5">Registrasi Akun</h4>
        <form class="form-box px-3">
            <div class="form-input">
            <span><i class="fa fa-envelope-o"></i></span>
            <input
                type="email"
                name="email"
                id="inputName"
                placeholder="Email"
                required
            />
            </div>
            <div class="form-input">
            <span><i class="fa fa-key"></i></span>
            <input type="password" name="review" id="inputReview" placeholder="Password" aria-label="input Password">
            </div>
            <div class="form-input">
            <span><i class="fa fa-key"></i></span>
            <input
                type="password"
                name="confirmPassword"
                id="inputConfirm"
                placeholder="Ulangi Password"
                required
            />
            </div>

            <div class="mb-3">
            <button type="submit" class="submit btn btn-block">Daftar</button>
            </div>

            <div class="text-center mb-2">
            Sudah memiliki akun?
            <a
                href="/"
                class="link"
                aria-label="klik di sini jika kamu telah memiliki akun"
                >Masuk</a
            >
            </div>
        </form>
    </div>
  `;

export {
  createHomeTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createFormReviewTemplate,
};
