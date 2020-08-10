import Picker from '.././components/Picker';

const InfoAlgoPicker = () => {

    const algorithm = new Map();
    // setting algorithm process
    algorithm.set('Knuth–Morris–Pratt','kmp');
    algorithm.set('Boyer–Moore','bm');
    algorithm.set('Regular Expression','regex');

    const template = `
    ${Picker(algorithm, "input-algo")}
  `;
    return template;
};

export default InfoAlgoPicker;