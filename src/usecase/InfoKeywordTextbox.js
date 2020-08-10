import Textbox from '.././components/Textbox';

const InfoKeywordTextbox = () => {
    const template = `
    ${Textbox("Enter a Keyword", "input-keyword")}
  `;
	return template;
};

export default InfoKeywordTextbox;