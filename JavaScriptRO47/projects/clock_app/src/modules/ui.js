class UI {
  constructor() {
    this.expand = null;
    this.isExpandOpen = false;
  }

  setup() {
    this.expand = document.querySelector("#expand-content");
    this.expandBtn = document.querySelector("#expand-btn");
  }

  setupExpandBtn() {
    this.expandBtn.addEventListener("click", () => {
      if (this.isExpandOpen) {
        this.expand.style.opacity = 0;
        this.expand.style.pointerEvents = "none";
        this.expand.style.height = 0;
        this.expandBtn.innerHTML = `
            MORE
            <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <circle cx="20" cy="20" r="20" fill="#303030" />
            <path d="M14 17L20 23L26 17" stroke="white" stroke-width="2" />
            </svg>
        `;
        this.isExpandOpen = false;
      } else {
        this.expand.style.opacity = 1;
        this.expand.style.pointerEvents = "all";
        this.expand.style.height = "50vh";
        this.expandBtn.innerHTML = `
            LESS
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#303030"/>
            <path d="M14 17L20 23L26 17" stroke="white" stroke-width="2"/>
            </svg>
        `;
        this.isExpandOpen = true;
      }
    });
  }
}

export default UI;
