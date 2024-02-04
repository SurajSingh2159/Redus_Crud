import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { VectorIcon } from './VectorIcon.js';
import classes from './XnixLineRss.module.css';

interface Props {
  className?: string;
}
/* @figmaId 410:242 */
export const XnixLineRss: FC<Props> = memo(function XnixLineRss(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
