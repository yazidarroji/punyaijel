class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // console.log(localStorage.getItem("auth"),'INI NAVIGATION BAR');
    if(localStorage.getItem("auth") === "1"){
        this.innerHTML = `
        <div class="main">
          <div class="navigation-bar">
            <div class="user">
              <a></a>
              <p>`+localStorage.getItem("email_user")+`</p>
            </div>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('navigation-bar', NavigationBar);
