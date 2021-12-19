/* eslint-disable no-console */
import UrlParser from '../../routes/url-parse';
import RestaurantDbSource from '../../data/restaurantdb-source';
import TransaksiDB from '../../data/transaksidb';
import jsPDF from 'jspdf';
import'jspdf-autotable';
import { createRestaurantDetailTemplate,createFormReviewTemplate,createTableTemplate } from '../templates/templateku';
import LikeButtonPresenter from '../../utils/button-register';
import FormReviewInitiator from '../../utils/form-transaksi';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const convertRupiah = require('rupiah-format')

let pemasukan = localStorage.getItem("p1")
let pengeluaran = localStorage.getItem("p2")
let total = localStorage.getItem("total")

let RpPemasukan = convertRupiah.convert(pemasukan)
let RpPengeluaran = convertRupiah.convert(pengeluaran)
let RpTotal = convertRupiah.convert(total)


const InputPage = {
  async render() {
    return `
    <div class="loader">
      <div class="dot-pulse"></div>
    </div>
    
    <div class="detail-form">
      <div id="formReviewContainer"></div>
    </div>
    <div class="inputContent" id="inputContent"></div>
    <div class="table-title">
      <h3 tabindex="0">Transaksi Pemasukan dan Pengeluaran</h3>
    </div>
    <div class="table-wrapper table-responsive">
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button id="pdf" class="btn btn-warning me-md-2">Export Laporan</button>
      </div>
      <table id="example" class="table table-striped table-hover ">
          <thead>
              <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Pemasukan</th>
                  <th>Pengeluaran</th>
                  <th>Total</th>
                  <th>Keterangan</th>
                  <th>Hapus</th>
              </tr>
          </thead>
          <tbody class="listku">
          </tbody>
          <tfoot>
              <td colspan="2"><b>Jumlah</b></td>
              <td>`+RpPemasukan+`</td>
              <td>`+RpPengeluaran+`</td>
              <td>`+RpTotal+`</td>
              <td></td>
              <td></td>
          </tfoot>
      </table>
    </div>
    <div class="detail" id="item" tabindex="0"></div>

    <div id="likeButtonContainer"></div>
   
    `;
  },
  async afterRender() {
    const pdf = document.querySelector('#pdf');
    pdf.addEventListener('click', (e) => {
      e.preventDefault();
        const doc = new jsPDF()
        doc.autoTable({html: '#example'})
        doc.save('laporan.pdf');
    });
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.detail');
    const deleteClass = document.querySelector('.detail');
    const TransaksiContainer = document.querySelector('.listku');
    const loading = document.querySelector('.loader');
    const review = document.querySelector('.detail-form');
    review.style.display = 'none';
    try {
      // console.log(transisidelte);
      // deleteClass.innerHTML = createRestaurantDetailTemplate(data.restaurant);
      const transaksiku = await TransaksiDB.listRestaurant();
      transaksiku.forEach((listku) => {
        TransaksiContainer.innerHTML += createTableTemplate(listku);
      });
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
      const buttonDelete = document.querySelectorAll("#transaksiku");
      buttonDelete.forEach((button) => {
        button.addEventListener('click', () => {
          TransaksiDB.deleteTransaksi(button.value);

          console.log(localStorage.getItem("token"),localStorage.getItem("email_user"),localStorage.getItem("id_user"),localStorage.getItem("auth"),'INI BAGIAN HOME');
          alert('Berhasil Menghapus Transaksi');
          location.reload();
        });
      });
      

      buttonDelete.forEach((value) => {
        console.log(value,'My ID iS  Available');
        // TransaksiContainer.innerHTML += createTableTemplate(listku);
      });
      buttonDelete.addEventListener("click", function () {
        console.log(1234,'MAsuk Delete pak eko');
        // const book = {
        //     id: Number.parseInt(inputBookId.value),
        //     title: inputBookTitle.value,
        //     author: inputBookAuthor.value
        // };
        // insertBook(book)
      });

      


    } catch (error) {
      loading.style.display = 'none';
      restaurantContainer.innerHTML = '<p class="error-message">refresh your browser</p>';
    }
  },
};

export default InputPage;
