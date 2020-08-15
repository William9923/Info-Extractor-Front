import InfoHeader from "./usecase/InfoHeader";
import InfoFooter from "./usecase/InfoFooter";
import InfoAlgoPicker from "./usecase/InfoAlgoPicker";
import InfoKeywordTextbox from "./usecase/InfoKeywordTextbox";
import InfoSearchButton from "./usecase/InfoSearchButton";
import InfoMenuTab from "./usecase/InfoMenuTab";
import InfoLoadingModal from "./usecase/InfoLoadingModal";
import InfoResultModal from './usecase/InfoResultModal';
import InfoResultListView from "./usecase/InfoResultListView";


async function App() {

  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
        ${InfoHeader()}
        <div id="alert-popup">
        </div>
        ${InfoMenuTab()}
        ${InfoAlgoPicker()}
    <div class="form-group row centered">
      <div class="col-sm-5">
        ${InfoKeywordTextbox()}
      </div>
        ${InfoSearchButton()}  
    </div>  
    <div id="result">
    </div>
        ${InfoFooter()}
    </div>
  `;
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;