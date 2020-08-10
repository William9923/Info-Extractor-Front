const Textbox = (placeholder) => {
    const template = `
    <div class="input-group mb-3 mt-4">
        <div class="input-group-prepend">
            <span class="input-group-text">${placeholder}</span>
        </div>
        <input type="text" class="form-control col-sm-3">
    </div>
  `;

	return template;
};

export default Textbox;