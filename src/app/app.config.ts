const url = {
  localhost: 'http://localhost:9000/api',
  desktop: 'http://192.168.1.67:9000/api',
  laptop: 'http://192.168.1.93:9000/api',
  heroku: 'https://socialfriends-restapi.herokuapp.com/api',
  now: 'https://socialfriends.now.sh/api'
};

export let config = {
  url: url.localhost
};
