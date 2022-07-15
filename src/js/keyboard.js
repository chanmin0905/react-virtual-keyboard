export class Keyboard {
  // hash : 해쉬를 붙이면 프라이빗 변수가되어, 외부에서 값을 조회하거나 덮어씌울수 없다. es2019부터 적용된 내용이다.
  #switchEl;
  #fontSelectEl;
  #containerEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
    this.#fontSelectEl = document.querySelector(".select-box");
    this.#containerEl = document.querySelector(".container");
  }

  #addEvent() {
    // 스위치 누르면 다크모드 변경
    this.#switchEl.addEventListener("change", () => {
      if (
        document.documentElement.getAttribute("theme") === "" ||
        document.documentElement.getAttribute("theme") === null
      ) {
        document.documentElement.setAttribute("theme", "dark-mode");
      } else {
        document.documentElement.setAttribute("theme", "");
      }
    });

    // 폰트 선택
    this.#fontSelectEl.addEventListener("change", (event) => {
      this.#containerEl.style.fontFamily = event.target.value;
    });
  }
}
