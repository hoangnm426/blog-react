import React from "react";

function CreateNewStory() {
  return (
    <section id="main">
      <section id="form">
        <form>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" />
          <label for="content">Content:</label>
          <textarea></textarea>
          <button>Submit</button>
        </form>
      </section>
      <aside>
        <section id="information">
          <h3>About Me</h3>
          <p>
            Hi, i am the author Blog. This blog is to provide you with daily
            outfit ideas and share my personal style
          </p>
        </section>
      </aside>
    </section>
  );
}

export default CreateNewStory;
