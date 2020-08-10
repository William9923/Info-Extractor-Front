const Textarea = (label, id, rows=3) => {
    const template = `
    <div class="form-group">
        <label for="${id}">${label}</label>
        <textarea class="form-control" id="${id}" rows="${rows}"></textarea>
    </div>
  `;

	return template;
};

export default Textarea;