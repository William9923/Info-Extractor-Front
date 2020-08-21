import InfoResultTab from "./InfoResultTab";
import LargeModal from '.././components/LargeModal';

const InfoResultModal = (data) => {
	const template = `
    ${LargeModal(InfoResultTab(data),'Service Result','result-modal', 'title-modal')}
  `;
  return template;
};

export default InfoResultModal;