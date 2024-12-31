import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp; &nbsp;Thanks to &nbsp;<a href="https://www.linkedin.com/in/joy-shin/">Jooyoung Shin</a>
      </p>
    </footer>
  );
}

export default PageFooter;
