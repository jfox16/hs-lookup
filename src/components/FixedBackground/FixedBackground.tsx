import React from 'react';
import { useStyles } from './styles';

interface FixedBackgroundProps {
  backgroundImgUrl: string;
}

const FixedBackground = ({backgroundImgUrl}: FixedBackgroundProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{
      backgroundImage: `url(${backgroundImgUrl})`,
    }}>
    </div>
  );
}

export default FixedBackground;