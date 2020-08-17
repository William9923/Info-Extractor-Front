import ListView from '../components/ListView';
import InfoURLTextbox from './InfoURLTextbox';
import InfoTextareaInput from './InfoTextareaInput';
import ListGroup from '../components/ListGroup';

const InfoResultListView = (response) => {

  let headers = [];
  Object.keys(response).forEach(header => headers.push(
    {
      "id" : "list-" + header + "-tab",
      "value" : header.toLowerCase().charAt(0).toUpperCase() + header.toLowerCase().slice(1),
      "control" : "list-" + header + "-content",
    }
  ));

  let contents = [];
  Object.keys(response).forEach(header => contents.push(
    {
      "id" :  "list-" + header + "-content",
      "label" : "list-" + header + "-tab",
      "content": `${ListGroup(response[header], "list-group-" + header)}`
    }
  ));
  
	const template = `
    ${ListView(headers,"tab-menu-header",contents,"tab-menu-content")}
  `;
  return template;
  
};

export default InfoResultListView;