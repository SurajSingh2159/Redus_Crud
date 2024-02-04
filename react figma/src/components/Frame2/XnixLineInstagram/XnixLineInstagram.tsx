import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';
import classes from './XnixLineInstagram.module.css';

interface Props {
  className?: string;
}
/* @figmaId 410:254 */
export const XnixLineInstagram: FC<Props> = memo(function XnixLineInstagram(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon} />
      </div>
      <div className={classes.vector10}>
        <Vector10Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle2}></div>
    </div>
  );
});
