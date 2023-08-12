import React from "react";

const test =false


function Preloader() {


  return (
    <>
    {test ? (
    <h1>pre</h1>
    ) : (<h1>load</h1>)}
    </>

  );
}

export default Preloader;
