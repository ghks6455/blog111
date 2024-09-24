import { useRef } from "react";
import Styles from "./Card.module.css";
import Detail from "./Detail";
export default function Card({ data, postData, velogContents, setVelogContents }) {
  const modalRef = useRef();
  const deModalRef = useRef();
  // data 경로 확인 후 수정 중요!!!

  // console.log(postData);
  function On() {
    modalRef.current.openModal();
  }

  function DeleteModal() {
    deModalRef.current.showModal();
  }
  function cancel() {
    deModalRef.current.close();
  }
  function Delete(postId) {
    alert("게시글이 삭제되었습니다.");
    const even = velogContents[data].filter((post) => post.id !== postId);
    console.log(even);
    const curData = { ...velogContents, [data]: even };
    localStorage.setItem("blog", JSON.stringify(curData));
    // deModalRef.current.close();
    setVelogContents(curData);
  }
  return (
    <>
      <Detail ref={modalRef} postData={postData} />
      <dialog ref={deModalRef}>
        <h2>게시물을 삭제하시겠습니까?</h2>
        <button onClick={() => Delete(postData.id)}>삭제하기</button>
        <button onClick={cancel}>취소</button>
      </dialog>
      <div className={Styles.cardForm}>
        <div className={Styles.mainImg}>
          <img onClick={On} src={postData.image} alt="img" />
        </div>
        <div onClick={On} className={Styles.cardContent}>
          <h4>{postData.title}</h4>
          <div className={Styles.content}>
            <p>{postData.content}</p>
          </div>

          <div className={Styles.under}>
            {postData.createdAt} 댓글:{postData.comments}
          </div>
        </div>
        <div className={Styles.foot}>
          <div className={Styles.name}>
            <img src={postData.userImage} alt="userImg" className={Styles.userImg} />
            <p>by</p>
            <b>{postData.author}</b>
          </div>
          <button onClick={DeleteModal}>삭제</button>
          <div className={Styles.like}>{postData.likes}</div>
        </div>
      </div>
    </>
  );
}
