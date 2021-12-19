import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async reviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    
    if (response.status == 200) {
      

      alert('LOGIN SUCCESS');
      response.json().then(data => {
          localStorage.setItem("auth", 1);
          localStorage.setItem("token", data.token);
          localStorage.setItem("email_user", data.user.email);
          localStorage.setItem("id_user", data.user.id);
        return data;
      });
      window.location.assign("http://localhost:8080/#/home")
      location.reload();
      

    } else{
      alert('EMAIL DAN PASSORD TIDAK SESUAI DENGAN DATABASE');
      return response.status;

    }

  }
}

export default RestaurantDbSource;
