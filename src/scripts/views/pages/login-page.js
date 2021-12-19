import { createLoginTemplate } from '../templates/login.js';
const Login = {
    async init({ formReviewContainer, id }) {
      this._formReviewContainer = formReviewContainer;
      this._id = id;
      await this.render();
    },
    _renderReview(name, review) {
      const reviewContainer = document.querySelector('.reviews');
      const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
      const dataReview = `
      <div class="review-item">
        <h4 class="review_name"><i class="fa fa-user" aria-hidden="true"></i> ${name}</h4>
        <p class="review_date">${date}</p>
        <p class="review_desc">${review}</p>
      </div>`;
      reviewContainer.innerHTML += dataReview;
    },
  async render() {
    return `
    <div class="content">
        <div class="home-content" id="loginC"></div>
    </div>`;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#loginC');
    homeContainer.innerHTML = createLoginTemplate();

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(2334464);
			var error = 0;
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (self.validateFields(input) == false) {
					error++;
				}
			});
			if (error == 0) {
				//do login api here
				localStorage.setItem("auth", 1);
				this.form.submit();
			}
		});

    const skipLinkElem = document.querySelector('skip-to-content');
      skipLinkElem.addEventListener('click', (event) => {
        console.log(21762876);
        event.preventDefault();
        document.querySelector('#loginC').focus();
    });
  },
  
};

export default Login;
