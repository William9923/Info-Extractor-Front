import Textbox from '.././components/Textbox';

const InfoURLTextbox = () => {
    const template = `
    <div class="row centered">
      <div class="col-sm-12 col-md-9 col-xl-6">
      ${Textbox("Enter an URL", "input-url", 5)}
      </div>
    </div>
  `;
	return template;
};

export default InfoURLTextbox;