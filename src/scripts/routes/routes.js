/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Login from '../views/pages/login-page.js';
import Home from '../views/pages/home.js';
import Detail from '../views/pages/detail';
import Register from '../views/pages/register';
import HomePage from '../views/pages/home-page.js';
import InputPage from '../views/pages/input-page.js';
import DeleteTransaksi from '../views/pages/delete-transaksi.js';

const routes = {
  '/': Detail ,
  '/register': Register ,
  '/tester': Home ,
  // '/delete/transaksi/': DeleteTransaksi,
  '/home': HomePage,
  '/inputpage': InputPage,
  '/detail/:id': Detail,
};

export default routes;
