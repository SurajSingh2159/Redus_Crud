import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 14.0001C11.1157 13.9994 13.8559 11.9396 14.7224 8.94677C15.5889 5.95397 14.373 2.74874 11.7396 1.0836C9.10618 -0.581547 5.68919 -0.305721 3.35695 1.76026C1.02471 3.82624 0.338699 7.185 1.674 10.0001L0 14.0001L4.392 13.0001C5.4809 13.6564 6.72862 14.0022 8 14.0001Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.041 6.06608C5.47169 6.06112 5.01372 5.59646 5.01702 5.02714C5.02032 4.45781 5.48364 3.99849 6.05297 4.00013C6.6223 4.00177 7.08298 4.46375 7.083 5.03308C7.08024 5.60597 6.61388 6.0683 6.041 6.06608V6.06608Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.917 8.91808C8.91376 9.33975 9.16522 9.72172 9.55382 9.88542C9.94243 10.0491 10.3914 9.96224 10.6909 9.66536C10.9903 9.36849 11.0811 8.92028 10.9208 8.53027C10.7605 8.14026 10.3807 7.8855 9.959 7.88508C9.38612 7.88286 8.91976 8.3452 8.917 8.91808V8.91808Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 5.03308C4.986 8.50008 8.3 10.3301 9.959 9.95108'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
