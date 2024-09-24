import { useState } from "react";
import Styles from "./InputForm.module.css";
import { useRef } from "react";
export default function InputForm({ setVelogContents, setShowCard, data, setData }) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef();
  const tagRef = useRef();
  const contentRef = useRef();
  const modalRef = useRef();

  function onSum(e) {
    console.log("함수실행");
    e.preventDefault();

    const titleWord = titleRef.current.value;
    const tagWord = tagRef.current.value;
    const contentWord = contentRef.current.value;
    setVelogContents((prev) => {
      // form에서 받아온 새로운 데이터
      const newData = {
        id: Date.now(),
        title: titleWord,
        content: contentWord,
        author: tagWord,
        createdAt: Date.now(),
        image: "https://images.unsplash.com/photo-1725900653710-d1db440048bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        likes: 0,
        usetImage: "https://randomuser.me/api/portraits/men/60.jpg",
        comments: 0,
      };
      // 기존데이터에서 선택한 카테고리에 맞는 배열값 가져오기
      const prevArray = prev[data];
      // 입력값이 없을때 알람 발생 후 함수 종료
      if (!titleWord || !contentWord || !tagWord) {
        alert("내용을 입력 해 주세요");
        return prev;
      } else {
        openModal();
        // 배열에 새로운 데이터 push하기
        const newArray = [...prevArray, newData];
        // 객체 반환
        const local = { ...prev, [data]: [...newArray] };
        console.log(local);
        localStorage.setItem("blog", JSON.stringify(local));
        return local;
      }
    });
  }

  function openModal() {
    modalRef.current.showModal();
    closeModal();
  }
  function closeModal() {
    setTimeout(() => {
      modalRef.current.close();
      setShowCard((prev) => !prev);
    }, 2000);
  }

  function titleText(e) {
    setTitle(e.target.value);
  }
  function titleTag(e) {
    setTag(e.target.value);
  }
  function titleContent(e) {
    setContent(e.target.value);
  }
  return (
    <>
      <dialog ref={modalRef}>
        <h2>전송완료</h2>
      </dialog>
      <div className={Styles.wrapper}>
        <form onSubmit={onSum}>
          <div className={Styles.titleForm}>
            <div className={Styles.innerWrapper}>
              <textarea placeholder="제목을 입력하세요" className={Styles.titleText} value={title} onChange={titleText} ref={titleRef}></textarea>
              <div className={Styles.decoration}></div>
              <div>
                <div className={Styles.tag}>
                  <input placeholder="태그를 입력하세요" className={Styles.tagInput} value={tag} onChange={titleTag} ref={tagRef} />
                </div>
                <textarea placeholder="내용을 입력하세요" className={Styles.contentText} value={content} onChange={titleContent} ref={contentRef}></textarea>
              </div>
            </div>
          </div>
          <button type="submit">전송</button>
          <div>
            <button type="button" onClick={() => setData("trending")}>
              트렌딩
            </button>
            <button type="button" onClick={() => setData("latest")}>
              최신
            </button>
            <button type="button" onClick={() => setData("feed")}>
              피드
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
