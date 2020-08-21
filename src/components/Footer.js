const Footer = (createdBy) => {
    let date = new Date();

    const template = `
    <footer class="footer mt-auto py-3 fixed-bottom">
    <hr>
        <div class="container">
            <span>&copy; Created by <a class="link-primary" href="${createdBy['link']}" target="_blank">${createdBy['name']}</a> - ${date.getFullYear()}</span>
        </div>
    </footer>
  `;

    return template;
};

export default Footer;