import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Formref = forwardRef((props, ref) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusName: () => nameRef.current.focus(),
    focusEmail: () => emailRef.current.focus(),
    focusPassword: () => passwordRef.current.focus(),
    nameNode: nameRef.current,
    emailNode: emailRef.current,
  }));
  return (
    <>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} type="password" placeholder="Enter Password" />
    </>
  );
});

export default Formref;
// 2. Forward a single ref that's an object of refs

// Instead of useImperativeHandle, you can just create the refs in the parent and pass them down as an object of refs (not using forwardRef's special ref prop at all, just a regular prop):

// jsx
// function FormFields({ refs }) {
//   return (
//     <>
//       <input ref={refs.nameRef} placeholder="Name" />
//       <input ref={refs.emailRef} placeholder="Email" />
//       <input ref={refs.passwordRef} type="password" placeholder="Password" />
//     </>
//   );
// }

// function Parent() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   return (
//     <>
//       <FormFields refs={{ nameRef, emailRef, passwordRef }} />
//       <button onClick={() => emailRef.current.focus()}>Focus Email</button>
//     </>
//   );
// }
