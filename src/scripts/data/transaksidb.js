import API_ENDPOINT from '../globals/api-endpoint';

class TransaksiDB {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_TRANSAKSI);
    const responseJson = await response.json();
    return responseJson.data;
  }
  // static async SumChart(id){
  //   const response = await fetch(API_ENDPOINT.SCHART(id));
  //   const responseJson = await response.json();
  //   return responseJson.transaksi;
  // }

  static async chart(id) {
    const response = await fetch(API_ENDPOINT.CHART(id));
    // const responseJson = await response.json();
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async deleteTransaksi(id){
    const response = await fetch(API_ENDPOINT.DELTRANSAKSI(id));
    console.log('in TDB;')
    return response.json();
  }

  static async reviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.TRANSAKSI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    console.log(response.status);
    if (response.status == 201) {
      //   window.location.assign("http://localhost:8080/")
      alert('TRANSAKSI BERHASIL!!!');
      // window.location.assign("http://localhost:8080/#/inputpage")

      location.reload();
    } else{
      alert('TRANSAKSI GAGAL ');
    }
    console.log('INI TRANSAKSI ', response);

    return response.status;
  }
}

export default TransaksiDB;
