import Textbox from '.././components/Textbox';

const InfoURLTextbox = () => {
    const template = `
    ${Textbox("Enter an URL", "input-url")}
  `;
	return template;
};

export default InfoURLTextbox;