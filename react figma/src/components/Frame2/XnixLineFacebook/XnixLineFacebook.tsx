import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { VectorIcon } from './VectorIcon.js';
import classes from './XnixLineFacebook.module.css';

interface Props {
  className?: string;
}
/* @figmaId 410:235 */
export const XnixLineFacebook: FC<Props> = memo(function XnixLineFacebook(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
