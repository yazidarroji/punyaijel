import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
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
let x= 1;
const convertRupiah = require('rupiah-format')

const createTableTemplate = (listku) => `
  
              <tr>
                  <td>${x++}</td>
                  <td>${listku.tgl_transaksi}</td>
                  <td>${convertRupiah.convert(listku.pemasukan)}</td>
                  <td>${convertRupiah.convert(listku.pengeluaran)}</td>
                  <td>${ convertRupiah.convert(listku.pemasukan - listku.pengeluaran) } </td>
                  <td>${listku.keterangan}</td>
                  <td>
                      <button id="transaksiku" value="${listku.id}" class="btn btn-danger "><i class="fa fa-trash"></i></button>
                  </td>
              </tr>
          
  `;

const createHomeTemplate = () => `
<div class="wrapper">
    <div class="card card-pemasukan" >
        <div class="card-body">
            <div>
                <h5 tabindex="0">Pemasukan</h5>
                <h4 tabindex="0"><b>Rp 2.000.000</b></h4>
            </div>
        </div>
        <div class="card-footer py-3">
            <a href="">Lihat semua<i class="fa fa-angle-right"></i></a>
        </div>
    </div>
    <div class="card card-pengeluaran" >
        <div class="card-body">
            <div>
                <h5 tabindex="0">Pengeluaran</h5>
                <h4 tabindex="0"><b>Rp 500.000</b></h4>
            </div>
        </div>
        <div class="card-footer py-3">
            <a href="">Lihat semua<i class="fa fa-angle-right"></i></a>
        </div>
    </div>
    <div class="card card-total">
        <div class="card-body">
            <div>
                <h5 tabindex="0">Total</h5>
                <h4 tabindex="0"><b>Rp 1.500.000</b></h4>
            </div>
        </div>
        <div class="card-footer py-3">
            <a href="">Lihat semua<i class="fa fa-angle-right"></i></a>
        </div>
    </div>
</div>
<section id="containerChart" style="width: 100%">
    <canvas id="ChartTotal"></canvas>
</section>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>`;
const createInputTemplate = () => `
<div class="row input-container">
    <div class="col-sm">
        <label for="input-title" class="form-label">Pengeluaran</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp.</span>
            <input type="text" class="form-control" aria-label="Jumlah pengeluaran dalam rupiah">
        </div>
    </div>
    <div class="col-sm">
        <label for="input-title" class="form-label">Pemasukan</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp.</span>
            <input type="text" class="form-control" aria-label="Jumlah pemasukan dalam rupiah">
        </div>
    </div>
    <div class="mb-3">
        <label for="input-title" class="form-label">Keterangan</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="keterangan transaksi">
        </div>
    </div>
    <div class="mb-3">
        <button type="submit" class="btn btn-block">Tambah</button>
    </div>
</div> 
`;

const createFormReviewTemplate = () => `
    <div class="card-body">
        <form class="form-box px-3">
            <div class="col-sm-12">
            <div class="col-sm">
                <label for="input-title" class="form-label">Pengeluaran</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">Rp.</span>
                    <input type="text" id="inputPengeluaran" class="form-control" aria-label="Jumlah pengeluaran dalam rupiah">
                </div>
            </div>
            <div class="col-sm">
                <label for="input-title" class="form-label">Pemasukan</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">Rp.</span>
                    <input type="text" id="inputPemasukan" class="form-control" aria-label="Jumlah pemasukan dalam rupiah">
                </div>
            </div>
            </div>
            <div class="mb-3">
                <label for="input-title" class="form-label">Keterangan</label>
                <div class="input-group mb-3">
                    <input type="text" id="inputKeterangan" class="form-control" aria-label="keterangan transaksi">
                </div>
            </div>
            <div class="mb-3">
                <button type="submit" class="submit btn btn-block">Tambah</button>
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
  createTableTemplate,
  createInputTemplate,
};

