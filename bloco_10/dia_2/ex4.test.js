const api_url = 'https://api.github.com/orgs/tryber/repos'
const { TestScheduler } = require('@jest/core');
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Test repository fetch', () => {
  it('Repositry fetch', () => {
    getRepos(api_url).then((data) => {
      expect(data).toContain('sd-01-week4-5-project-todo-list');
      expect(data).toContain('sd-01-week4-5-project-meme-generator');
    }) 
  })
})