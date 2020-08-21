
import InfoHeader from "./usecase/InfoHeader";
import InfoFooter from "./usecase/InfoFooter";
import InfoAlgoPicker from "./usecase/InfoAlgoPicker";
import InfoKeywordTextbox from "./usecase/InfoKeywordTextbox";
import InfoSearchButton from "./usecase/InfoSearchButton";
import InfoMenuTab from "./usecase/InfoMenuTab";
import InfoLoadingModal from "./usecase/InfoLoadingModal";

async function App() {

  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container mx-auto">
        ${InfoHeader()}
        <div id="alert-popup">
        </div>
      <div class="my-4 mx-auto">
        ${InfoMenuTab()}
      </div>
      <div class="my-4 mx-auto">
        ${InfoAlgoPicker()}
      </div>

    <div class="row justify-content-md-center my-4 mx-auto">
        ${InfoKeywordTextbox()}
      <div class="col-auto">
        ${InfoSearchButton()}
      </div>  
    </div>  
    <div id="modal-placeholder">
      ${InfoLoadingModal()}
    </div>
    <div id="result-placeholder">
    </div>
        ${InfoFooter()}
    </div>
  `;
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;