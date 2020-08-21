import modal from "bootstrap/js/dist/modal";

const LargeModal = (content, title, id, modalId) => {
	const template = `
      <div class="modal fade" id="${id}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="${modalId}" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${modalId}">${title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${content}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  `;
	return template;
};

export default LargeModal;