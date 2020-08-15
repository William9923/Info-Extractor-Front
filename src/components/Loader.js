const Loader = (placeholder) => {
    const template = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    ${placeholder}...
  `;
	return template;
};

export default Loader;