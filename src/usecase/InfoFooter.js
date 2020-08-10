import Footer from '.././components/Footer';

const InfoFooter = () => {
    const body = {
        "name" : "William",
        "link" : "https://github.com/William9923",
    };
	const template = `
    ${Footer(body)}
    `;
	return template;
};

export default InfoFooter;