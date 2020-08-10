import TabNav from './TabNav';

const TabNavs = (headers, id) => {
    let firstIteration = true;
    let tabHeaderTemplate = ""; 
    headers.forEach((value, index) => {
        tabHeaderTemplate += TabNav(value['value'], value['id'], value['control'] ,firstIteration);
        firstIteration = false; // after the first iteration
    })
	const template = `
    <ul class="nav nav-pills mb-3" id="pills-${id}" role="tablist" >
        ${tabHeaderTemplate}
    </ul>
  `;
	return template;
};

export default TabNavs;
