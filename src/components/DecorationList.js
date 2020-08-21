const DecorationList = (contents, id) => {
    let templateContent = ""
    Object.keys(contents).forEach(key => {
        templateContent += `
        <dt class="col-sm-6 col-xl-3 col-md-4">${key.toLowerCase().charAt(0).toUpperCase() + key.toLowerCase().slice(1)}</dt>
        <dd class="col-sm-6 col-xl-9 col-md-8">${contents[key]}</dd>
        `
    })
	const template = `
    <dl class="row text-left" id="${id}">
        ${templateContent}
    </dl>
  `;

	return template;
};

export default DecorationList;