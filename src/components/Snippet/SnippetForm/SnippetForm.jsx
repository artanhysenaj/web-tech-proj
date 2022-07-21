import React from "react";
const SnippetForm = (props) => {
  return (
    <form>
      <div className="flex flex-col text-black">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content"></textarea>
        <label htmlFor="language">Language</label>
        <select id="language" name="language">
          <option value="javascript">javascript</option>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="c++">c++</option>
          <option value="c#">c#</option>
          <option value="php">php</option>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="sass">sass</option>
          <option value="less">less</option>
          <option value="ruby">ruby</option>
          <option value="rust">rust</option>
          <option value="typescript">typescript</option>
          <option value="swift">swift</option>
          <option value="kotlin">kotlin</option>
          <option value="go">go</option>
          <option value="scala">scala</option>
          <option value="elixir">elixir</option>
          <option value="haskell">haskell</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description"></textarea>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SnippetForm;
