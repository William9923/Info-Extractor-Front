const Textbox = (placeholder, id, length=3) => {
    const template = `
    <div class="input-group centered">
        <div class="input-group-prepend">
            <span class="input-group-text">${placeholder}</span>
        </div>
        <input type="text" class="form-control col-sm-${length}" id="${id}">
    </div>
  `;

	return template;
};

export default Textbox;