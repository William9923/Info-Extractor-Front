const Button = (value, id) => {
	const template = `
    <button class="btn btn-primary" id="${id}">${value}</button>
  `;

	return template;
};

export default Button;