import React from 'react';

import useToggle from './useToggle';

describe('useToggle', () => {
  const mockSetState = jest.fn();

  beforeEach(() => {
    (jest.spyOn(React, 'useState') as jest.Mock).mockImplementationOnce(
      (value) => [value, mockSetState]
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not setState on initial call', () => {
    useToggle();
    expect(mockSetState).not.toHaveBeenCalled();
  });

  it('should return correct initial state on initial call', () => {
    const [toggle] = useToggle();
    expect(toggle).toBe(false);
  });

  it('should return true on initial call', () => {
    const [toggle] = useToggle(true);
    expect(toggle).toBe(true);
  });

  it('should call setState when setToggle called', () => {
    const hook = useToggle();
    hook[1]();
    expect(mockSetState).toHaveBeenCalled();
  });
});
