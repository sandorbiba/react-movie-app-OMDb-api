import React from "react";

export const Search = ({ handleInput, search }) => {
  return (
    <div>
      <section className="searchbox-wrap">
        <input
          type="text"
          className="searchbox"
          placeholder="Search for a movie..."
          onChange={handleInput}
          onKeyPress={search}
        />
      </section>
    </div>
  );
};
