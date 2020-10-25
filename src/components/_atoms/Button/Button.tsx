import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  className,
  children,
  onClick
}) => {
  return (
    <button onClick={onClick} data-testid="Button" className={classNames(styles.Button, className)}>
      {children}
    </button>
  );
};

export default Button;
