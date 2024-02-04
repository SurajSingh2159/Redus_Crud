import { memo, SVGProps } from 'react';

const TopHearderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1443 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1443V37H0V0Z' fill='#79B22C' />
  </svg>
);
const Memo = memo(TopHearderIcon);
export { Memo as TopHearderIcon };
