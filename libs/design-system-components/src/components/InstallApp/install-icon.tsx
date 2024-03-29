import React from 'react';

const InstallIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 3C24.8284 3 25.5 3.67157 25.5 4.5L25.5 15H22.5V4.5C22.5 3.67157 23.1716 3 24 3Z"
      fill="currentColor"
    />
    <path
      d="M22.5 15L22.5 26.3787L19.0607 22.9393C18.4749 22.3536 17.5251 22.3536 16.9393 22.9393C16.3536 23.5251 16.3536 24.4749 16.9393 25.0607L22.9393 31.0607C23.2206 31.342 23.6022 31.5 24 31.5C24.3978 31.5 24.7794 31.342 25.0607 31.0607L31.0607 25.0607C31.6464 24.4749 31.6464 23.5251 31.0607 22.9393C30.4749 22.3536 29.5251 22.3536 28.9393 22.9393L25.5 26.3787V15H33C36.3137 15 39 17.6863 39 21V39C39 42.3137 36.3137 45 33 45H15C11.6863 45 9 42.3137 9 39V21C9 17.6863 11.6863 15 15 15H22.5Z"
      fill="currentColor"
    />
  </svg>
);

export default InstallIcon;
