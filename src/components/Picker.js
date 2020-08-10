const Picker = (map, id) => {
    
    let optionValueTemplate = "";
    map.forEach((value, key) => {
        optionValueTemplate += `<option value="${value}">${key}</option>`;
    });

	const template = `
    <select class="custom-select col-sm-3" id=${id}>
        ${optionValueTemplate}
    </select>
  `;

	return template;
};

export default Picker;