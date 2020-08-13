const Button = (value, id) => {
	const template = `
    <button class="btn" id="${id}">${value}</button>
  `;

	return template;
};

export default Button;