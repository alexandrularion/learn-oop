class UI {
  constructor() {
    // Serach Bar
    this.input = document.querySelector("input");
    this.button = document.querySelector("button");

    // Profile Bio
    this.image = document.querySelector(".profile__image img");
    this.name = document.querySelector(".profile__bio__header h1");
    this.joined = document.querySelector(".profile__bio__header p");
    this.userName = document.querySelector(".profile__bio__header__name");
    this.description = document.querySelector(
      ".profile__bio__header__description"
    );

    // Profile Metrics
    this.repositories = document.querySelector(
      ".profile__metrics__card__repositories"
    );
    this.followers = document.querySelector(
      ".profile__metrics__card__followers"
    );
    this.following = document.querySelector(
      ".profile__metrics__card__following"
    );

    // Profile Details
    this.location = document.querySelector(".profile__details__card__location");
    this.twitter = document.querySelector(".profile__details__card__twitter");
    this.website = document.querySelector(".profile__details__card__website");
    this.company = document.querySelector(".profile__details__card__company");
  }
  preareButtonClickEvent(callback) {
    this.button.addEventListener("click", () => {
      const search = this.input.value;
      if (search) {
        callback(search);
      }
    });
  }
}

class API {
  constructor() {
    this.data = {};
    this.endpointURL = "https://api.github.com/users";
  }
  async getUserByName(name) {
    const res = await fetch(`${this.endpointURL}/${name}`);
    const body = await res.json();
    this.data = body;
  }
}

const ui = new UI();
const api = new API();

ui.preareButtonClickEvent((search) => {
  api.getUserByName(search);
});
