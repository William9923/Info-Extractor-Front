import Textbox from '.././components/Textbox';

const InfoURLTextbox = () => {
    const template = `
    <div class="form-group row mx-1">
      ${Textbox("Enter an URL", "input-url", 5)}
    </div>
  `;
	return template;
};

export default InfoURLTextbox;