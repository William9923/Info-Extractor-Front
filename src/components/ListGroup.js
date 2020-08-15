import ListItem from './ListItem';

const ListGroup = (items,id) => {
    let listGroupTemplate = ""; 
    items.forEach((value, index) => {
        listGroupTemplate += ListItem(value);
    })
	const template = `
    <ul class="list-group list-group-flush" id="${id}">
        ${listGroupTemplate}
    </ul>
  `;
	return template;
};

export default TabNavs;