const axios = require('axios').default;
const util = require('util');
const { default: URLNotExistError } = require('../error/URLNotExistError');
const urlExists = util.promisify(require('url-exists'));

const api = process.env.API_HOST;
const version = process.env.VERSION;

module.exports.TextService = async (keyword, algo, content) => {
  const params = new URLSearchParams({
    algo: algo,
    keyword: keyword,
    content: content,
  }).toString();
  return axios
    .get(api + '/api/' + version + '/text/?' + params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

module.exports.URLService = async (keyword, algo, url) => {
  let isExists = await urlExists(url);
  if (!isExists) {
    throw URLNotExistError("Url not valid", url);
  }
  const params = new URLSearchParams({
    algo: algo,
    keyword: keyword,
    url: url,
  }).toString();
  return axios
    .get(api + '/api/' + version + '/scraper/?' + params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};