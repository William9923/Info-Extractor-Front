const SmallModal = (content, title, id) => {
  const template = `
    <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="modal-${id}" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-${id}">${title}</h5>
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