import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { VectorIcon } from './VectorIcon.js';
import classes from './XnixLineRight_Arrow.module.css';

interface Props {
  className?: string;
}
/* @figmaId 403:148 */
export const XnixLineRight_Arrow: FC<Props> = memo(function XnixLineRight_Arrow(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
