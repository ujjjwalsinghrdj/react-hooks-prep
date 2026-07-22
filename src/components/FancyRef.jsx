import React, { forwardRef, useImperativeHandle, useRef } from "react";

const FancyRef = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => inputRef.current.clear(),
  }));

  return (
    <div>
      <input ref={inputRef} {...props} />
    </div>
  );
});

export default FancyRef;
