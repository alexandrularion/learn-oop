class API {
  constructor() {
    this.endpointURL = "https://api.github.com/users";
    this.isFound = false;
    this.data = {};
  }

  getIsFound() {
    return this.isFound;
  }

  getData() {
    return this.data;
  }

  async getUserInfo(username) {
    const response = await fetch(`${this.endpointURL}/${username}`);
    const body = await response.json();
    this.data = {
      id: body.login,
      avatarUrl: body.avatar_url,
      fullName: body.name,
      createdAt: body.created_at,
      biography: body.bio,
      metrics: {
        followers: body.followers,
        following: body.following,
        repositories: body.public_repos,
      },
      links: {
        location: body.location,
        twitter: body.twitter_username,
        website: body.blog,
        company: body.company,
      },
    };
    /**
     {
        "login": "alexandrularion",
        "id": 80340138,
        "node_id": "MDQ6VXNlcjgwMzQwMTM4",
        "avatar_url": "https://avatars.githubusercontent.com/u/80340138?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alexandrularion",
        "html_url": "https://github.com/alexandrularion",
        "followers_url": "https://api.github.com/users/alexandrularion/followers",
        "following_url": "https://api.github.com/users/alexandrularion/following{/other_user}",
        "gists_url": "https://api.github.com/users/alexandrularion/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alexandrularion/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alexandrularion/subscriptions",
        "organizations_url": "https://api.github.com/users/alexandrularion/orgs",
        "repos_url": "https://api.github.com/users/alexandrularion/repos",
        "events_url": "https://api.github.com/users/alexandrularion/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alexandrularion/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 13,
        "public_gists": 0,
        "followers": 9,
        "following": 5,
        "created_at": "2021-03-09T15:22:48Z",
        "updated_at": "2024-04-03T11:55:15Z"
    }
     */
    this.isFound = Object.getOwnPropertyNames(body).includes("id");
  }
}

export default API;
