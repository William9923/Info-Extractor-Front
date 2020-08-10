const TabContent = (content, id, label,isActive=false) => {
    let active = isActive ? " show active" : "";
	const template = `
    <div class="tab-pane fade${active}" id="${id}" role="tabpanel" aria-labelledby="${label}">${content}</div>
  `;

	return template;
};

export default TabContent;