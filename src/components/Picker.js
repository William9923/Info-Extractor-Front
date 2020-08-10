const Picker = (map) => {
    
    let optionValueTemplate = "";
    map.forEach((value, key) => {
        optionValueTemplate += `<option value="${value}">${key}</option>`;
    })

	const template = `
    <select class="custom-select col-sm-3">
        <option selected>Pick Any Algorithm</option>
        ${optionValueTemplate}
    </select>
  `;

	return template;
};

export default Picker;