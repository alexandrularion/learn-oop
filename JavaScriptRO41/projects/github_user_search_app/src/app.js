import UI from "./ui.js";
import API from "./api.js";

const ui = new UI();
const api = new API();

ui.setAvatar(
  "https://images.pexels.com/photos/20830592/pexels-photo-20830592/free-photo-of-a-man-in-a-suit-and-tie-is-walking.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

ui.setUserName("Mihaitza");
ui.setUserId("mihaitza_boss");
ui.setJoinedDate("10/07/1991");
ui.setDescription("Numarul 1 pa Romania");

ui.setFollowers(1000000);
ui.setFollowing(20);
ui.setRepositories(9999999);

ui.setLocation("Craiova, Ro", "https://google.com");
ui.setTwitter("N-avem", "https://x.com");
ui.setWebsite("mihaitza.boss", "https://mihaitza.ro");
ui.setCompany("HaHaHa Production", "https://hahahaproduction.com/");

api.getUserInfo("alexandrularion");
