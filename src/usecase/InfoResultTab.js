import Tab from '../components/Tab';
import InfoResultList from './InfoResultList';
import InfoStats from './InfoStats';

const InfoResultTab = (data) => {

  const headers = [
    {
      "id" : "result-tab",
      "value" : "Result",
      "control" : "result-content",
    },
    {
      "id" : "stats-tab",
      "value" : "Stats",
      "control" : "stats-content",
    },
  ];

  const contents = [
    {
      "id": "result-content",
      "content": `${InfoResultList(data.result)}`,
      "label": "result-tab",
    },
    {
      "id": "stats-content",
      "content": `${InfoStats(data.stats)}`,
      "label": "stats-tab",
    }
  ];
  
	const template = `
    ${Tab(headers,"tab-menu-header",contents,"tab-menu-content")}
  `;
  return template;
  
};

export default InfoResultTab;