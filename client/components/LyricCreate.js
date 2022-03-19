import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_LYRIC_TO_SONG, GET_SONG } from "../queries/apolloQueries";

const LyricCreate = ({ songId, history }) => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const [addLyricToSongMutation] = useMutation(ADD_LYRIC_TO_SONG);

  const onSubmit = (event) => {
    event.preventDefault();

    addLyricToSongMutation({
      variables: {
        songId,
        content,
      },
      // refetchQueries: [{ query: GET_SONG, variables: { id } }],
    }).then(() => setContent(""));
    // .then(() => history.push("/"));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </form>
  );
};

export default LyricCreate;
