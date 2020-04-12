import React from 'react';

export default props => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <g strokeDasharray=".001 4">
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="12" y1="4" x2="12" y2="20" />
  </g>
</svg>
);
