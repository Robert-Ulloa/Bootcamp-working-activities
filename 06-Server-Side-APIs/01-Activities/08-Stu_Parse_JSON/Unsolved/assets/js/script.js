// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
const requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    data.forEach(function (issues) {
      console.log('Issue URL:', issues.html_url);
      console.log('User Login:', issues.user.login);
    });


    // TODO: Console log each issue's URL and each user's login


  });
