const Footer = (createdBy) => {
    let date = new Date();

    const template = `
    <hr>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <span>&copy; Created by <a href="${createdBy['link']}" target="_blank">${createdBy['name']}</a> - ${date.getFullYear()}</span>
        </div>
    </footer>
  `;

    return template;
};

export default Footer;