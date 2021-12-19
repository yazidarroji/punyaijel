/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { createHomeTemplate } from '../templates/template-creator.js';





const convertRupiah = require('rupiah-format')

let pemasukan = localStorage.getItem("p1")
let pengeluaran = localStorage.getItem("p2")
let total = localStorage.getItem("total")

let RpPemasukan = convertRupiah.convert(pemasukan)
let RpPengeluaran = convertRupiah.convert(pengeluaran)
let RpTotal = convertRupiah.convert(total)

const HomePage = {
  async render() {
    return `
    <div class="content">
        <div class="home-title">
            <h2>Hello 
            <strong>Dicoding,</strong>
            </h2>
            <p tabindex="0">Catat transaksi pemasukan dan pengeluaran usahamu di sini!</p>
        </div>
        <div class="wrapper">
            <div class="card card-pemasukan" >
                <div class="card-body">
                    <div>
                        <h5 tabindex="0">Pemasukan</h5>
                        <h4 tabindex="0"><b>`+RpPemasukan+`</b></h4>
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
                        <h4 tabindex="0"><b>`+RpPengeluaran+`</b></h4>
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
                        <h4 tabindex="0"><b>`+RpTotal+`</b></h4>
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
        <div class="home-content" id="homeContent"></div>
    </div>`;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#homeContent');
    homeContainer.innerHTML = createHomeTemplate();

    const skipLinkElem = document.querySelector('skip-to-content');
      skipLinkElem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#homeContent').focus();
    });
    try {
        
        loading.style.display = 'none';
        gallery.style.display = 'block';

        restaurants.forEach((restaurant) => {
            console.log(restaurant,'MAU TAU AJA INI ISINYA APA?');
            // restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    } catch (error) {
        console.log(error);
    }



  },
};

export default HomePage;
