const ListItem = (item) => {
	const template = `
    <li class="list-group-item">${item}</li>
  `;
	return template;
};

export default ListItem;