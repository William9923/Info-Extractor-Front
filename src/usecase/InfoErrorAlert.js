import Alert from '.././components/Alert';

const InfoErrorAlert = () => {
    const template = `
    ${Alert("Error happened! Please contact creator for maintenance.", 'danger')}
    `;
    return template;
}

export default InfoErrorAlert;