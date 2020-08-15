const ListNav = (value, id, control,selected=false) => {
    let active = selected ? " active" : "";
	const template = `
        <a class="list-group-item list-group-item-action ${active}" id="${id}" data-toggle="list" href="#${control}" role="tab" aria-controls="${control}">${value}</a>
  `;

	return template;
};

export default ListNav;