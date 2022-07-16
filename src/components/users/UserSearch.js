import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, clearUsers, searchUsers } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      //search user
      searchUsers(text);
      setText("");
    } else {
      alert("Please enter something!!!!");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit} className="form-control">
          <div className="relative">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search User"
            />
            <button
              className="absolute top-0 right-0 rounded-l-none btn btn-lg"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
