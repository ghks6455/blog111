// 리엑트 훅 (hooks)
// 1. useState -> 컴포넌트를 리빌드(UI변경)
// 2. useRef -> 리빌드 X (UI변경 X)
import { useRef } from "react";

export default function Login() {
  const idRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const id = idRef.current.value;
    const password = passwordRef.current.value;
    console.log(id, password);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">id</label>
        <input type="text" id="id" ref={idRef} />
        <br />
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={passwordRef} />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
