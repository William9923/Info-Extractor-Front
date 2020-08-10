const Footer = () => {
    let date = new Date();
    let userGithubLink = "https://github.com/William9923";
    let creditGithubLink = "https://github.com/bradtraversy";

    const template = `
    <hr>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <span>&copy; Created by <a href="${userGithubLink}" target="_blank">William</a> - ${date.getFullYear()} | Credit for <a href="${creditGithubLink}" target="_blank">Traversy Media</a> for vanilla js boilerplate</span>
        </div>
    </footer>
  `;

    return template;
};

export default Footer;