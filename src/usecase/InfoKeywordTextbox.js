import Textbox from '.././components/Textbox';

const InfoKeywordTextbox = () => {
    const template = `
    <div class="row mt-4 mb-4 mx-1">
      ${Textbox("Enter a Keyword", "input-keyword", 8)}
    </div>
  `;
	return template;
};

export default InfoKeywordTextbox;