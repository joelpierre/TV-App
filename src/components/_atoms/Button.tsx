import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  className?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  className,
  children
}) => {
  return (
    <button data-testid="Button" className={classNames(styles.Button, className)}>
      {children}
    </button>
  );
};

export default Button;
