import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { VectorIcon } from './VectorIcon.js';
import classes from './XnixLineCall.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 401:14 */
export const XnixLineCall: FC<Props> = memo(function XnixLineCall(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
