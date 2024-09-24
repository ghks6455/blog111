import { forwardRef, useImperativeHandle, useRef } from "react";
const detail = forwardRef(function Detail({ postData }, ref) {
  const dialogChild = useRef();
  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialogChild.current.showModal();
      },
    };
  });
  function off() {
    dialogChild.current.close();
  }
  return (
    <dialog ref={dialogChild}>
      <img src={postData.image} alt="img" />
      <h4>{postData.title}</h4>
      <p>{postData.content}</p>
      <button onClick={off}>닫기</button>
    </dialog>
  );
});

export default detail;
