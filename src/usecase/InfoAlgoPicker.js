import Picker from '.././components/Picker';

const InfoAlgoPicker = () => {

    const algorithm = new Map();
    // setting algorithm process
    algorithm.set('Knuth–Morris–Pratt','kmp');
    algorithm.set('Boyer–Moore','bm');
    algorithm.set('Regular Expression','regex');

    const template = `
    <label for="input-algo" class="form-label">
      Input an algorithm
    </label>
    <div class="mb-4 mt-1">
      ${Picker(algorithm, "input-algo")}
    </div>
  `;
    return template;
};

export default InfoAlgoPicker;