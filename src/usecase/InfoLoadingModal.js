import SmallModal from ".././components/SmallModal";
import Loader from '.././components/Loader';

const InfoLoadingModal = () => {
    const template = `
    ${SmallModal(Loader(),'Processing...','process-modal')}
    `;
    return template;
}

export default InfoLoadingModal;