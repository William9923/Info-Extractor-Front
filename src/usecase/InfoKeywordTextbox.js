import Textbox from '.././components/Textbox';

const InfoKeywordTextbox = () => {
    const template = `
      <div class="col-sm-9 col-md-6 col-xl-4">
      ${Textbox("Enter a Keyword", "input-keyword", 8)}
      </div>
  `;
	return template;
};

export default InfoKeywordTextbox;