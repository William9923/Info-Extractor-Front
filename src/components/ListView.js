import ListNavs from "./ListNavs";
import TabContents from './TabContents';

const Tab = (navigationMap, idHeader, contentMap, idContent) => {
    const template = `
    <div class="row">
        <div class="col col-lg-2 col-sm-3">
            ${ListNavs(navigationMap, idHeader)}
        </div>
        <div class="col-lg-10 col-sm-9">
            ${TabContents(contentMap, idContent)}
        </div>
    </div>
  `;

	return template;
};

export default Tab;