export class Keyboard {
  // hash : 해쉬를 붙이면 프라이빗 변수가되어, 외부에서 값을 조회하거나 덮어씌울수 없다. es2019부터 적용된 내용이다.
  #switchEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      if (
        document.documentElement.getAttribute("theme") === "" ||
        document.documentElement.getAttribute("theme") === null
      ) {
        document.documentElement.setAttribute("theme", "dark-mode");
      } else {
        document.documentElement.setAttribute("theme", "");
      }
    });
  }
}

/*
    1. 키보드 클래스 안에서 돔을 가지고와서 돔에 이벤트를 붙인다. 

*/
