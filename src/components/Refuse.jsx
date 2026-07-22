import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Refuse = forwardRef((props, ref) => {
  const [timer, setTimer] = useState(0); //timer
  const intervalRef = useRef();
  const prevCountRef = useRef();


  useEffect(() => {
    prevCountRef.current = timer;
  });
  function start() {
    prevCountRef.current = setInterval(() => {
      setTimer((s) => s + 1);
    }, 100);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function focusInput() {
    ref.current.focus();
  }
  return (
    <>
      <div className="py-4">
        {/* Why this works: the useEffect runs after the render that displays count and prevCountRef.current (old value). Then it updates the ref to the current value, ready for next render's comparison. This is a very common interview pattern. */}
        <p>
          Now: {timer}, Before: {prevCountRef.current}
        </p>
        <h2>{timer}s</h2>
        <button onClick={start}>start timer</button>
        <button onClick={stop}>stop timer</button>
      </div>
      <input ref={ref} type="text" />
      <button className="btn btn-outline btn-danger" onClick={focusInput}>
        Focus on input
      </button>

    </>
  );
});

export default Refuse;
