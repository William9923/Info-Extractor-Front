import ListGroup from '../components/ListGroup';

const InfoResultList = (res) => {
    const template = `
    ${ListGroup(res, "result-list")}
  `;
    return template;
};

export default InfoResultList;