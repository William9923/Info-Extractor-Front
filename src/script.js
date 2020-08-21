import Modal from 'bootstrap/js/dist/modal';
import Alert from 'bootstrap/js/dist/alert';

import InfoLoader from './usecase/InfoLoader';
import InfoNotFilledAlert from './usecase/InfoNotFilledAlert';
import InfoErrorAlert from './usecase/InfoErrorAlert';
import InfoURLNotExistAlert from './usecase/InfoURLNotExistAlert';
import DataNotFilledError from './error/DataNotFilledError';
import InfoResultModal from './usecase/InfoResultModal';
import { Preprocess, Beautify } from './logic/preprocess';

const { TextService, URLService } = require('./logic/fetcher');

document.querySelector('#btn-search').addEventListener('click', async function () {

  // close all alert
  var alertNode = document.querySelector('.alert');
  var alert = new Alert(alertNode);
  alert.close()

  document.querySelector('#btn-search').innerHTML = InfoLoader();
  document.querySelector('#btn-search').disabled = true;

  var loaderModal = new Modal(document.getElementById("process-modal"), {});
  loaderModal.show();

  let algo = document.getElementById('input-algo').value;
  let keyword = document.getElementById('input-keyword').value;
  let tab = document.querySelector('.nav-link.active').text.toLowerCase();

  // add getter logic here etc
  let response;
  console.log("Process starting ...")
  try {
    switch (tab) {
      case "text":
        let text = document.getElementById('input-text').value;
        _validate(text, keyword);
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
    returnButtonState();
  }
  loaderModal.hide();
  console.debug("hai hai");
  // process
  if (response != undefined) {
    let data = preprocessResult(response, keyword);
    document.querySelector('#result-placeholder').innerHTML = InfoResultModal(data); // input result of preprocessing into result modal
    var resultModal = new Modal(document.getElementById("result-modal"), {});
    resultModal.show();

    returnButtonState();
  }
});

const returnButtonState = () => {
  document.querySelector('#btn-search').innerHTML = '🔎';
  document.querySelector('#btn-search').disabled = false;
}

const preprocessResult = (response, keyword) => {

  // preprocess answer for formatting (find suitable algorithm)
  let result = Preprocess(response.answer, response.metadata.seperator, keyword);
  let stats = Beautify(response.stats);
  return {
    "stats": stats,
    "result": result
  }
}

const _validate = (content, keyword) => {
  if (!keyword) {
    throw new DataNotFilledError("Keyword not filled");
  }

  if (!content) {
    throw new DataNotFilledError("Text/URL not filled")
  }
}



