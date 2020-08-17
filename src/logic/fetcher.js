const axios = require('axios').default;
const util = require('util');
const { default: URLNotExistError } = require('../error/URLNotExistError');

const api = process.env.API_HOST;
const version = process.env.VERSION;

module.exports.TextService = async (keyword, algo, content) => {
  const params = new URLSearchParams({
    algo: algo,
    keyword: keyword,
    content: content,
  }).toString();
  return axios
    .get(api + '/api/' + version + '/text/?' + params, {
      crossDomain: true
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.URLService = async (keyword, algo, url) => {
  const params = new URLSearchParams({
    algo: algo,
    keyword: keyword,
    url: url,
  }).toString();
  return axios
    .get(api + '/api/' + version + '/scraper/?' + params, {
      crossDomain: true
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new URLNotExistError(url);
    });
};