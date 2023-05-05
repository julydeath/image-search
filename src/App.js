import React, { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/NewSearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [list, setList] = useState();

  const getTerm = async (name) => {
    const data = await searchImages(name);
    setList(data);
  };

  return (
    <div className="App">
      <h1>Image</h1>
      <SearchBar onsubmit={getTerm} />
      <br />
      <br />
      <ImageList list={list} />
    </div>
  );
}

export default App;
