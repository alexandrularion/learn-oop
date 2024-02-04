class App {
  constructor() {
    this.paragraph = document.querySelector("p");
    this.heading = document.querySelector("h1");
    this.button = document.querySelector("button");
  }
  setParagraphText(adviceId) {
    this.paragraph.innerText = `A D V I C E # ${adviceId}`;
  }
  setHeadingText(adviceName) {
    this.heading.innerText = adviceName;
  }
  prepareEvents(callback) {
    document.addEventListener("DOMContentLoaded", callback);
    this.button.addEventListener("click", callback);
  }
}

class API {
  constructor() {
    this.advice = {};
    this.endpointURL = "https://api.adviceslip.com/advice";
  }
  async getRandomAdvice() {
    /**
     * Fetch API
     * The old way to work with promises
     * 
      fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res);
        res.json().then((body) => {
          console.log(body);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("A fost apelat finally oricum.");
      });
     */
    try {
      const response = await fetch(this.endpointURL);
      const body = await response.json();
      this.advice = {
        id: body.slip.id,
        name: body.slip.advice,
      };
    } catch (e) {
      console.log(e);
    }
    return this.advice;
  }
}

const app = new App();
const api = new API();

/**
 * Creates the click and DOMContentLoaded events
 */
app.prepareEvents(() => {
  api.getRandomAdvice().then((advice) => {
    app.setParagraphText(advice.id);
    app.setHeadingText(advice.name);
  }); // request to API (Backend) takes 500ms
});
