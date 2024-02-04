import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { VectorIcon } from './VectorIcon.js';
import classes from './XnixLineEnvelope.module.css';

interface Props {
  className?: string;
}
/* @figmaId 401:25 */
export const XnixLineEnvelope: FC<Props> = memo(function XnixLineEnvelope(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
