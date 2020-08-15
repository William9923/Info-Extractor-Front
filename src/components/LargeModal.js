const LargeModal = (content, title, id, modalId, buttonId) => {
	const template = `
    <!-- Modal -->
    <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${modalId}" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
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
            <button type="button" class="btn btn-secondary" id=${buttonId}>TestClick</button>
          </div>
        </div>
    </div>
  </div>
  `;
	return template;
};

export default LargeModal;