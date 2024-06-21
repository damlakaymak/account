import { addDoc, collection } from "firebase/firestore";
import React, { useCallback, useState } from "react";
import { db } from "../firebase";

const ref = collection(db, "posts");

const AddPost = () => {
  const [body, setBody] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
    

      addDoc(ref, {
        body: body,
      });
    },
    [body]
  );
  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          type="text"
          placeholder="what are you working on"
          className="bg-gray-100 p-4 rounded-t-md"
        />
        <input
          className="bg-pink-300 p-4 rounded-b-md"
          type="submit"
          value="send"
        />
      </form>
    </div>
  );
};

export default AddPost;
