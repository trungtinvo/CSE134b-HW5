class ButtonCount extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

    // Create a click button
    const clickButton = document.createElement("button");
    clickButton.innerHTML = "Times Clicked: ";

    // Create a span to show times number
    const span = document.createElement("span");
    span.innerHTML = 0;
    clickButton.append(span);

    // Attach the created elements to the shadow DOM
    this.shadowRoot.append(clickButton);

    // Create button functionality
    clickButton.addEventListener("click", () => {
      span.innerHTML++;
    });
  }
}

customElements.define("button-count", ButtonCount);
