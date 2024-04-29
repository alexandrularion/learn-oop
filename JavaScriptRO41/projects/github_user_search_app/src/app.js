import UI from "./ui.js";
import API from "./api.js";

const ui = new UI();
const api = new API();

ui.setupButtonEventListener(async (search) => {
  await api.getUserInfo(search);
  const user = api.getData();
  const isFound = api.getIsFound();

  if (isFound) {
    // Enable the profile sections
    ui.enableProfileSection();

    // Set all the data related to the user
    ui.setAvatar(user.avatarUrl);
    ui.setUserName(user.fullName);
    ui.setUserId(user.id);
    ui.setJoinedDate(user.createdAt);
    ui.setDescription(user.biography);
    ui.setFollowers(user.metrics.followers);
    ui.setFollowing(user.metrics.following);
    ui.setRepositories(user.metrics.repositories);
    ui.setLocation(user.links.location, "https://google.com");
    ui.setTwitter(user.links.twitter, "https://x.com");
    ui.setWebsite(user.links.website, user.links.website);
    ui.setCompany(user.links.company, "https://hahahaproduction.com/");
  } else {
    ui.enableEmptySection();
  }
});
