exports.getRepos = (req, res, next) => {
  const axios = require('axios');
// Define constant
// Endpoint URL
  const githubUrl = 'https://api.github.com/graphql';
// Your personal access token
  const token = 'cb3e5899d42efd89b2432aa8ee2fab60f8ebf6c8';
// The Authorization in the header of the request
  const oauth = {Authorization: 'bearer ' + token};
// The GraphQL query, a string
  const query = '{' +
    'repositoryOwner(login: "ntorbev") { ' +
    '... on User {' +
    'pinnedRepositories(first: 6) {' +
    'edges {' +
    'node {' +
    'name,' +
    'description,' +
    'url' +
    '}' +
    '}' +
    '}' +
    '}' +
    '}' +
    '}';
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  let fetchedRepos;
// Respos request, axios.post() return a Promise
  axios.post(githubUrl, {query}, {headers: oauth})
    .then(response => {
      res.status(200).json({
        repos: response.data.data.repositoryOwner.pinnedRepositories.edges
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

