import React from "react";

function Note() {
  return (
    <div>
      <p className="note" contenteditable="True">
        <h1>This is the note title.</h1>
        <p>This is the node content.</p>
      </p>
    </div>
  );
}

export default Note;
