import ListItem from './ListItem';

const ListGroup = (items,id) => {
    let listGroupTemplate = ""; 
    items.forEach((value) => {
        listGroupTemplate += ListItem(value);
    })
	const template = `
    <ol class="list-group list-group-flush" id="${id}">
        ${listGroupTemplate}
    </ol>
  `;
	return template;
};

export default ListGroup;