import Alert from '.././components/Alert';

const InfoNotFilledAlert = () => {
    const template = `
    ${Alert("Data not filled correctly. Please try again", 'warning')}
    `;
    return template;
}

export default InfoNotFilledAlert;