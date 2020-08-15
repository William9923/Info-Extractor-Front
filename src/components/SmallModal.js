const SmallModal = (content, title, id, modalId) => {
	const template = `
    <!-- Modal -->
    <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${modalId}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
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
        </div>
    </div>
  </div>
  `;
	return template;
};

export default SmallModal;