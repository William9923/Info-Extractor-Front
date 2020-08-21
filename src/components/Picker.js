const Picker = (map, id) => {
    
    let optionValueTemplate = "";
    map.forEach((value, key) => {
        optionValueTemplate += `<option value="${value}">${key}</option>`;
    });

    const template = `
    <div class="row centered">
        <div class="col-xl-4 col-md-6 col-sm-9">
            <select class="form-select" id=${id}>
                ${optionValueTemplate}
            </select>
        </div>
    </div>
  `;

	return template;
};

export default Picker;