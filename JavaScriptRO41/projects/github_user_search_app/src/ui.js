class UI {
  constructor() {
    // Navigation
    this.search = document.querySelector(".nav__input");
    this.button = document.querySelector(".nav__btn");

    // User Details
    this.avatar = document.querySelector(".avatar__img");
    this.userName = document.querySelector(".user__heading");
    this.userId = document.querySelector(".user__text");
    this.joined = document.querySelector(".details__created");

    // Description
    this.description = document.querySelector(".information__description");

    // Metrics
    this.repositories = document.querySelectorAll(".card__heading")[0];
    this.followers = document.querySelectorAll(".card__heading")[1];
    this.following = document.querySelectorAll(".card__heading")[2];

    // Links
    this.location = document.querySelectorAll(".card__link")[0];
    this.twitter = document.querySelectorAll(".card__link")[1];
    this.website = document.querySelectorAll(".card__link")[2];
    this.company = document.querySelectorAll(".card__link")[3];
  }

  /**
   * @description Set the "src" attribute of the img element
   * @param {string} url  i.e. "https://pexels....."
   */
  setAvatar(url) {
    if (url && typeof url === "string") {
      this.avatar.setAttribute("src", url);
    }
  }

  /**
   * @description Set the user name text
   * @param {string} name  i.e. "The octocat"
   */
  setUserName(name) {
    if (name && typeof name === "string") {
      this.userName.innerText = name;
    }
  }

  /**
   * @description Set the user id text
   * @param {string} id   i.e. "@theoctocat"
   */
  setUserId(id) {
    if (id && typeof id === "string") {
      this.userId.innerText = `@${id}`;
    }
  }

  /**
   * @description Set and format the joined date text
   * @param {string} date
   */
  setJoinedDate(date) {
    if (date && typeof date === "string") {
      this.joined.innerText = new Date(date).toLocaleDateString("en", {
        // TODO: Added configuration
      });
    }
  }

  /**
   * @description Set the biography text of the user
   * @param {string} description  i.e. "Lorem ipsum..."
   */
  setDescription(description) {
    if (description && typeof description === "string") {
      this.description.innerText = description;
    }
  }

  /**
   * @description Set the total number of repositories text
   * @param {number} amount  i.e. 30
   */
  setRepositories(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.repositories.innerText = amount;
    }
  }

  /**
   * @description Set the total number of followers text
   * @param {number} amount  i.e. 1000
   */
  setFollowers(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.followers.innerText = amount;
    }
  }

  /**
   * @description Set the total number of following text
   * @param {number} amount i.e. 300
   */
  setFollowing(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.following.innerText = amount;
    }
  }

  /**
   * @description Set the location text
   * @param {string} name
   */
  setLocation(name) {
    if (name && typeof name === "string") {
      this.location.innerText = name;
    }
  }

  /**
   * @description Set the twitter text
   * @param {string} name
   */
  setTwitter(name) {
    if (name && typeof name === "string") {
      this.twitter.innerText = name;
    }
  }

  /**
   * @description Set the website text
   * @param {string} name
   */
  setWebsite(name) {
    if (name && typeof name === "string") {
      this.website.innerText = name;
    }
  }

  /**
   * @description Set the company text
   * @param {string} name
   */
  setCompany(name) {
    if (name && typeof name === "string") {
      this.company.innerText = name;
    }
  }
}

export default UI;
