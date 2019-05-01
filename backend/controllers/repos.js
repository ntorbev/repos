const axios = require('axios');
const githubUrl = 'https://api.github.com/graphql';
const token = '1f4473760e373792d2eaff1e047eae50e7009e63';
const oauth = {Authorization: 'bearer ' + token};
exports.getRepos = (req, res, next) => {
  const query = '{' +
    'repositoryOwner(login: "ntorbev") { ' +
    '... on User {' +
    'pinnedRepositories(first: 2) {' +
    'edges {' +
    'node {' +
    'name,' +
    'description,' +
    'url,' +
    'licenseInfo{' +
    '      key' +
    '     }' +
    'defaultBranchRef{' +
    '      target{' +
    '       ... on Commit{' +
    '        history(first:10){' +
    '         totalCount' +
    '         edges{' +
    '          node{' +
    '           ... on Commit{' +
    '            message' +
    '           }' +
    '          }' +
    '         }' +
    '        }' +
    '       }' +
    '      }' +
    '     }' +
    '}' +
    '}' +
    '}' +
    '}' +
    '}' +
    '}';

  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  let fetchedRepos;

  axios.post(githubUrl, {query}, {headers: oauth})
    .then(response => {
      res.status(200).json({
        repos: response.data.data.repositoryOwner.pinnedRepositories.edges,
        maxRepos: 12
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.getRepoReadme = (req, res, next) => {
  // const repoName = req.body;
  const query =
    `{repository(owner: "ntorbev", name: ${req.params.repo}) {` +
    '    content:object(expression: "master:README.md") {' +
    '      ... on Blob {' +
    '        text' +
    '      }' +
    '    }' +
    '  }}';

  axios.post(githubUrl, {query}, {headers: oauth})
    .then(response => {
      const content = response.data.data.repository.content
      res.status(200).json({
        readme: content ? response.data.data.repository.content.text : 'missing readme'
      });
    }).catch(error => {
    console.log(error)
  });
};

exports.getCommits = (req, res, next) => {
  const query =
    `{ repository(owner: "ntorbev", name: ${req.params.repo}) {` +
    '   ref(qualifiedName: "master") {' +
    '     target {' +
    '       ... on Commit {' +
    '      id' +
    '      history(first: 5) {' +
    '        pageInfo {' +
    '          hasNextPage' +
    '        }' +
    '        edges {' +
    '          node {' +
    '            messageHeadline' +
    '            oid' +
    '            message' +
    '            author {' +
    '              name' +
    '              email' +
    '              date' +
    '            }' +
    '          }' +
    '        }' +
    '      }' +
    '    }' +
    '  }' +
    '}' +
    '}' +
    '}';

  axios.post(githubUrl, {query}, {headers: oauth})
    .then(response => {
      res.status(200).json({
        commits: response.data.data.repository.ref.target.history.edges
      });
    })
    .catch(error => {
      console.log(error)
    });
};
