import TabContents from "./TabContents";
import TabNavs from "./TabNavs";

const Tab = (headerMap, idHeader, contentMap, idContent) => {
	const template = `
  ${TabNavs(headerMap, idHeader)}
  ${TabContents(contentMap, idContent)}
  `;

	return template;
};

export default Tab;