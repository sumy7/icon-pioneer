import "../index";

class SvgIcon extends HTMLElement {
    constructor() {
        super();

        const name = this.getAttribute("name");
        const id = `icon-${name}`;
        this.classList.add("icon");

        this.innerHTML = `<div class="icon-wrapper">
  <div class="icon-container">
    <svg class="icon" width="1em" height="1em" fill="currentColor">
      <use xlink:href="#${id}"></use>
    </svg>
  </div>
  <div class="icon-name">${name}</div>
</div>`;
    }
}

customElements.define("svg-icon", SvgIcon);

const req = require.context("../svgs", false, /\.svg$/);

window.onload = function () {
    document.getElementById("app").innerHTML = req
        .keys()
        .map((id) => {
            const name = /(\S+\/)(\S+)\.svg/.exec(id)[2];
            return `<svg-icon name="${name}"></svg-icon>`;
        })
        .join("\n");
};
