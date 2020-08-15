import LargeModal from ".././components/LargeModal";
import Loader from '.././components/Loader';
const InfoResultModal = () => {
	const template = `
    ${LargeModal(Loader(),'Processing ...','result-modal', 'loading-modal', 'btn-result')}
  `;
  return template;
};

export default InfoResultModal;