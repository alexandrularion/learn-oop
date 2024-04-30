class UI {
  constructor() {
    // Navigation
    this.search = document.querySelector(".nav__input");
    this.button = document.querySelector(".nav__btn");

    // Error Labels
    this.noResults = document.querySelector(".nav__results");

    // Sections
    this.emptySection = document.querySelector(".profile__empty");
    this.avatarSection = document.querySelector(".profile__avatar");
    this.informationSection = document.querySelector(".profile__information");

    // User Details
    this.avatar = document.querySelector(".avatar__img");
    this.userName = document.querySelector(".user__heading");
    this.userId = document.querySelector(".user__text");
    this.joined = document.querySelector(".details__created");

    // Description
    this.biography = document.querySelector(".information__description");

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
   * @description Set the "Not Available" text when no data found
   * @param {Element} element i.e. HTMLElement
   */
  setNotAvailable(element) {
    element.innerText = "Not Avaiable";
    element.style.opacity = 0.6;
    element.style.cursor = "not-allowed";
    if (element.localName === "a") {
      element.setAttribute("href", "#");
    }
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
    } else {
      this.setNotAvailable(this.userName);
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
      const formatedDate = new Date(date).toLocaleDateString("ro", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      this.joined.innerText = `Joined ${formatedDate}`;
    }
  }

  /**
   * @description Set the biography text of the user
   * @param {string} biography  i.e. "Lorem ipsum..."
   */
  setBiography(biography) {
    if (biography && typeof biography === "string") {
      this.biography.innerText = biography;
    } else {
      this.setNotAvailable(this.biography);
    }
  }

  /**
   * @description Set the total number of repositories text
   * @param {number} amount  i.e. 30
   */
  setRepositories(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.repositories.innerText = amount.toLocaleString("ro");
    }
  }

  /**
   * @description Set the total number of followers text
   * @param {number} amount  i.e. 1000
   */
  setFollowers(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.followers.innerText = amount.toLocaleString("ro"); // 1.000
    }
  }

  /**
   * @description Set the total number of following text
   * @param {number} amount i.e. 300
   */
  setFollowing(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.following.innerText = amount.toLocaleString("ro");
    }
  }

  /**
   * @description Set the location text
   * @param {string} name i.e. "Romania, Craiova"
   * @param {string} url  i.e. "https://goo.gl/maps..."
   */
  setLocation(name, url) {
    if (name && typeof name === "string" && url && typeof url === "string") {
      this.location.innerText = name;
      this.location.setAttribute("href", url);
    } else {
      this.setNotAvailable(this.location);
    }
  }

  /**
   * @description Set the twitter text
   * @param {string} name i.e. "The Octocat"
   * @param {string} url  i.e. "https://x.com/theoctocat"
   */
  setTwitter(name, url) {
    if (name && typeof name === "string" && url && typeof url === "string") {
      this.twitter.innerText = name;
      this.twitter.setAttribute("href", url);
    } else {
      this.setNotAvailable(this.twitter);
    }
  }

  /**
   * @description Set the website text
   * @param {string} name  i.e. "mywebsite"
   * @param {string} url   i.e. "https://mywebsite.com"
   */
  setWebsite(name, url) {
    if (name && typeof name === "string" && url && typeof url === "string") {
      this.website.innerText = name;
      this.website.setAttribute("href", url);
    } else {
      this.setNotAvailable(this.website);
    }
  }

  /**
   * @description Set the company text
   * @param {string} name i.e. "MyCompany"
   * @param {string} url  i.e. "https://mycompany.com"
   */
  setCompany(name, url) {
    if (name && typeof name === "string" && url && typeof url === "string") {
      this.company.innerText = name;
      this.company.setAttribute("href", url);
    } else {
      this.setNotAvailable(this.company);
    }
  }

  /**
   * @description Add a click event on search button
   * @param {Function} callback i.e. ()=> { doSomething() }
   */
  setupButtonEventListener(callback) {
    this.button.addEventListener("click", () => {
      if (this.search.value.length >= 3) {
        callback(this.search.value);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.search.value.length >= 3) {
        callback(this.search.value);
      }
    });
  }

  /**
   * @description Set display flex profile sections and none to empty section
   */
  showProfileSection() {
    this.emptySection.style.display = "none";
    this.avatarSection.style.display = "flex";
    this.informationSection.style.display = "flex";
  }

  /**
   * @description Set display flex to "No results" text in navigation
   */
  showErrorLabel() {
    if (
      this.noResults.style.display.length === 0 ||
      this.noResults.style.display === "none"
    ) {
      this.noResults.style.display = "flex";
      this.informationSection.style.opacity = 0.6;
      this.avatarSection.style.opacity = 0.6;
    }
  }

  /**
   * @description Set display none to "No results" text in navigation
   */
  hideErrorLabel() {
    if (this.noResults.style.display === "flex") {
      this.noResults.style.display = "none";
      this.informationSection.style.opacity = 1;
      this.avatarSection.style.opacity = 1;
    }
  }
}

export default UI;
