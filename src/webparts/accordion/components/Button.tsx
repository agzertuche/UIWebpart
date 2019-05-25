import * as React from 'react';
import { SPComponentLoader } from '@microsoft/sp-loader';

const Button: React.StatelessComponent<any> = ({ setTheme, color }) => {
  const externalCSS = [
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
  ];

  externalCSS.forEach(css => {
    SPComponentLoader.loadCss(css);
  });

  return (
    <button
      className={`btn btn-sm btn-${color}`}
      type="button"
      onClick={() => setTheme()}
    >
      Default Theme
    </button>
  );
};

export default Button;
