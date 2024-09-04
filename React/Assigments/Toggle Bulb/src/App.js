import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>

      <br />
      <br />
      <br />

      {show ? (
        <img
          src="https://cdn.pixabay.com/photo/2014/11/26/21/09/bulb-546859_640.jpg"
          width="200"
          alt="..."
        />
      ) : (
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/081209-light-bulb-03.jpg"
          width="200"
          alt="..."
        />
      )}
    </div>
  );
}

export default App;
