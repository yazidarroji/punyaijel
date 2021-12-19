

const createLoginTemplate = () => `
<div class="card-body">
                <h4 class="title text-center mt-5" tabindex="0">
                  Selamat datang di BooKu!
                </h4>

                <form  class="form-box px-3 ">
                  <div class="form-input">
                    <span><i class="fa fa-user-o"></i></span>
                    <input
                      type="email"
                      name="email"
                      id="inputEmail"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-input">
                    <span><i class="fa fa-key"></i></span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <button type="submit" class="btn btn-block">Masuk</button>
                  </div>

                  <div class="text-center">
                    Belum memiliki akun? 
                    <a
                      href="register.html"
                      class="link"
                      aria-label="klik di sini jika kamu belum memiliki akun"
                      >Daftar</a
                    >
                  </div>
                </form>
              </div>
`;

export {
  createLoginTemplate
};
