import ListNav from './ListNav';

const ListNavs = (navigations, id) => {
    let tabNavigationTemplate = ""; 
    let firstIteration = true;
    navigations.forEach((value, index) => {
        tabNavigationTemplate += ListNav(value['value'], value['id'], value['control'] ,firstIteration);
        firstIteration = false; // after the first iteration
    })
    const template = `
    <div class="list-group" id="${id}" role="tablist">
        ${tabNavigationTemplate}
    </div>
  `;
	return template;
};

export default ListNavs;