import React, { component } from "react";
import ReactDom from "react-dom";
import { Books } from "./books";
import "./index.css";

function Booklist() {
  return (
    <article className="booklist">
      {Books.map((obj) => {
        return <Book img={obj.img} author={obj.author} title={obj.title} />;
      })}
    </article>
  );
}

function Book(props) {
  const { img, author, title } = props;
  return (
    <article className="book">
      <img src={img} alt={img} />
      <h4>{author}</h4>
      <p>{title}</p>
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
