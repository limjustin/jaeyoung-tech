require('typeface-montserrat');
require('prismjs/themes/prism-solarizedlight.css');
exports.onClientEntry = () => {
    const style = document.createElement('style');
    style.innerHTML = `
    .gatsby-resp-image-background-image {
      display: none !important;
    }
  `;
    document.head.appendChild(style);
}