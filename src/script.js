import InfoLoader from './usecase/InfoLoader';
import InfoResultListView from './usecase/InfoResultListView';

document.querySelector('#btn-search').addEventListener('click', function() {
    document.querySelector('#btn-search').innerHTML = InfoLoader();
    document.querySelector('#btn-search').disabled = true;

    // add getter logic here etc

    document.querySelector('#result').innerHTML = InfoResultListView();

    setTimeout(() => { 
        document.querySelector('#btn-search').innerHTML = '🔎';
        document.querySelector('#btn-search').disabled = false;
  }, 2000);
})



