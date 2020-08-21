import DecorationList from '.././components/DecorationList';

const InfoStats = (stats) => {
    const template = `
    ${DecorationList(stats, "stats-list")}
  `;
    return template;
};

export default InfoStats;