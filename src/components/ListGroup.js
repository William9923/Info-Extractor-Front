import ListItem from './ListItem';

const ListGroup = (items,id) => {
    let listGroupTemplate = ""; 
    items.forEach((value) => {
        listGroupTemplate += ListItem(value);
    })
	const template = `
    <ul class="list-group" id="${id}">
        ${listGroupTemplate}
    </ul>
  `;
	return template;
};

export default ListGroup;