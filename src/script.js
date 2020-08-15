import InfoLoader from './usecase/InfoLoader';
import InfoResultListView from './usecase/InfoResultListView';
import InfoNotFilledAlert from './usecase/InfoNotFilledAlert';
import InfoErrorAlert from './usecase/InfoErrorAlert';
import InfoURLNotExistAlert from './usecase/InfoURLNotExistAlert';
import DataNotFilledError from './error/DataNotFilledError';

const {TextService, URLService} = require('./logic/fetcher');

document.querySelector('#btn-search').addEventListener('click', async function() {
    document.querySelector('#btn-search').innerHTML = InfoLoader();
    document.querySelector('#btn-search').disabled = true;

    let algo = document.getElementById('input-algo').value;
    let keyword = document.getElementById('input-keyword').value;
    let tab = document.querySelector('.nav-link.active').text.toLowerCase();

    // add getter logic here etc
    let response;
    try {
      switch(tab) {
        case "text":
          let text = document.getElementById('input-text').value;
          _validate(text,keyword);
          response = await TextService(keyword, algo, text);
          break;
        case "url":
          let url = document.getElementById('input-url').value;
          _validate(url, keyword);
          response = await URLService(keyword, algo, url);
          break;
      }
    } catch (e) {
      if (e.name == 'DataNotFilledError') {
        document.getElementById('alert-popup').innerHTML = InfoNotFilledAlert();
      } else if (e.name == 'URLNotExistError') {
        document.getElementById('alert-popup').innerHTML = InfoURLNotExistAlert(e.url);
      } else {
        document.getElementById('alert-popup').innerHTML = InfoErrorAlert();
      }
    }

    document.querySelector('#result').innerHTML = InfoResultListView(response);

    document.querySelector('#btn-search').innerHTML = '🔎';
    document.querySelector('#btn-search').disabled = false;
});

const _validate = (content, keyword) => {
  if (!keyword) {
    throw new DataNotFilledError("Keyword not filled");
  }

  if (!content) {
    throw new DataNotFilledError("Text/URL not filled")
  }
}



