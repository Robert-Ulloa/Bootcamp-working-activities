fetch(
  // Explain each parameter in comments below.
  //per_page=10     retun only 10 as answer
  //state=open      filter onli the open ones
  //sort=created    sorted based on their creation date
  //direction=desc  sort direction to the most recent

  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
