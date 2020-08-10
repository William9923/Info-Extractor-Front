const TabNav = (value, id, control,selected=false) => {
    let active = selected ? " active" : "";
	const template = `
    <li class="nav-item">
        <a class="nav-link${active}" id="${id}" data-toggle="pill" href="#${control}" role="tab" aria-controls="${control}" aria-selected="${selected}">${value}</a>
    </li>
  `;

	return template;
};

export default TabNav;