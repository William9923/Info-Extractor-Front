import Alert from '.././components/Alert';

const InfoURLNotExistAlert = (url) => {
    const template = `
    ${Alert(`URL ${url} Not found. Please try another url again.`, 'info')}
    `;
    return template;
}

export default InfoURLNotExistAlert;