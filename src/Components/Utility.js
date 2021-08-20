import React, { useState } from "react";

function Utility(props) {
  document.title = "TextUtils";
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [paraCount, setParaCount] = useState(0);
  const [readingTime, setreadingTime] = useState(0);

  // check for desktop browser or mobile/table browser
  let isDesktop = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    isDesktop = false;
  } else {
    // false for not mobile device
    isDesktop = true;
  }

  // handle onCHange method for textarea
  const handleOnChange = (event) => {
    const textarea = event.target.value;
    setText(textarea);

    // for counting number of characters
    let characterCount = textarea.length;

    // for counting number of paragraphs
    let paraCount = 1;
    for (let index = 0; index < textarea.length; index++) {
      const element = textarea[index];
      if (element === "\n") {
        paraCount += 1;
      }
    }

    // for counting number of words
    let wordCount = 0;
    let res = [];
    let str = textarea.replace(/[\t\n\r\.\?\!]/gm, " ").split(" "); // eslint-disable-line
    str.map((s) => {
      let trimStr = s.trim();
      if (trimStr.length > 0) {
        res.push(trimStr);
      }
      return 0;
    });
    wordCount = res.length;

    // checking for empty textarea
    if (textarea === "") {
      paraCount = 0;
      characterCount = 0;
      wordCount = 0;
    }

    // setting states
    setCharacters(characterCount);
    setParaCount(paraCount);
    setWords(wordCount);
    setreadingTime(0.008 * wordCount);
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleCapitaleCase = () => {
    let sentence = text.toLowerCase();
    const finalSentence = sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );

    setText(finalSentence);
  };
  const handleExtraSpaces = () => {
    let removed_extra_spaces_text = text.split(/[ ]+/);
    setText(removed_extra_spaces_text.join(" "));
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };
  const handleClearText = () => {
    setText("");
  };

  return (
    <div className="d-flex flex-column">
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label w-100 text-center"
        >
          <h1
            className={`text-capitalize ${
              props.theme === true ? "text-light" : "text-dark"
            }`}
          >
            {props.obj.heading1}
          </h1>
        </label>
        <textarea
          className={`form-control ${
            props.theme === true ? "bg bg-secondary text-light" : ""
          }`}
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          style={{ borderRadius: "1.5rem", padding: "1.5rem" }}
          onChange={handleOnChange}
          placeholder="Enter Text Here"
        ></textarea>
      </div>
      <div className="my-2 w-75 m-auto">
        <ul className="list-group list-group-flush text-center">
          <li
            className={`list-group-item ${
              props.theme === true ? "list-group-item-dark" : ""
            }`}
          >
            Character Count: {characters}
          </li>
          <li
            className={`list-group-item ${
              props.theme === true ? "list-group-item-dark" : ""
            }`}
          >
            Word Count: {words}
          </li>
          <li
            className={`list-group-item ${
              props.theme === true ? "list-group-item-dark" : ""
            }`}
          >
            Paragraph Count: {paraCount}
          </li>
          <li
            className={`list-group-item ${
              props.theme === true ? "list-group-item-dark" : ""
            }`}
          >
            Approx. Reading Time: {readingTime} Min.
          </li>
        </ul>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center my-2">
        <button
          className="btn btn-outline-primary m-2"
          onClick={handleUpperCase}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-outline-primary m-2"
          onClick={handleLowerCase}
        >
          lowercase
        </button>
        <button
          className="btn btn-outline-primary m-2"
          onClick={handleCapitaleCase}
        >
          Capitalize
        </button>
        <button
          className="btn btn-outline-primary m-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-outline-primary m-2 ${
            isDesktop === true ? "" : "desktop-only"
          }`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          className="btn btn-outline-primary m-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default Utility;
