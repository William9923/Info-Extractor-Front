import Button from '.././components/Button';

const InfoSearchButton = () => {
    const template = `
    <div class="mx-1">
    ${Button("🔎", 'btn-search')}
    </div>
  `;
    return template;
};

export default InfoSearchButton;