import TabContent from './TabContent';

const TabContents = (contents, id) => {
    let firstIteration = true;
    let tabContentTemplate = ""; 
    contents.forEach((value, index) => {
        tabContentTemplate += TabContent(value['content'], value['id'], value['label'] ,firstIteration);
        firstIteration = false; // after the first iteration
    })
	const template = `
    <div class="tab-content" id="${id}">
        ${tabContentTemplate}
    </div>
  `;
	return template;
};

export default TabContents;

