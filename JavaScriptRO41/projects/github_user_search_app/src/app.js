import UI from "./ui.js";
import API from "./api.js";

const ui = new UI();
const api = new API();

ui.setupButtonEventListener(async (search) => {
  await api.getUserInfo(search);
  const user = api.getData();
  const isFound = api.getIsFound();

  if (isFound) {
    // Set all the data related to the user
    ui.setAvatar(user.avatarUrl);
    ui.setUserName(user.fullName);
    ui.setUserId(user.id);
    ui.setJoinedDate(user.createdAt);
    ui.setBiography(user.biography);
    ui.setFollowers(user.metrics.followers);
    ui.setFollowing(user.metrics.following);
    ui.setRepositories(user.metrics.repositories);
    ui.setLocation(user.links.location, "https://google.com");
    ui.setTwitter(user.links.twitter, "https://x.com");
    ui.setWebsite(user.links.website, user.links.website);
    ui.setCompany(user.links.company, "https://hahahaproduction.com/");

    // Enable the profile sections
    ui.hideErrorLabel();
    ui.showProfileSection();
  } else {
    ui.showErrorLabel();
  }
});
