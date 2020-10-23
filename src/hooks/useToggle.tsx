import React from 'react';

const useToggle = (initial = false): [boolean, () => void] => {
  const [isToggled, setIsToggle] = React.useState<boolean>(initial);
  const toggle = () => setIsToggle((prevSate) => !prevSate);
  return [isToggled, toggle];
};

export default useToggle;
