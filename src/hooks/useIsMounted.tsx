import React from 'react';

const useIsMounted = () => {
  const isMounted = React.useRef<boolean>(false);

  React.useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
