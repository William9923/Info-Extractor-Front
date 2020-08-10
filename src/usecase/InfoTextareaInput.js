import Textarea from '../components/Textarea';

const InfoTextareaInput = () => {
    const template = `
    ${Textarea("Enter any text", "input-text", 5)}
  `;
	return template;
};

export default InfoTextareaInput;