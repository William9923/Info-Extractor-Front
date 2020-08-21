const Header = (title) => {
	const template = `
    <header class="mt-3">
      <h1 class="display-1">${title}</h1>
      <hr>
    </header>
  `;
	return template;
};

export default Header;
