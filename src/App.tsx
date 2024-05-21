import { useState } from "react";
import styled from "@emotion/styled";
import Table from "./Table";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding-top: 240px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 42px;

  font-size: 18px;

  margin-top: 32px;
`;

export const ALL_POSSIBLE_NOTES = [
  "DO_1",
  "RE_1",
  "MI_1",
  "FA_1",
  "SOL_1",
  "LA_1",
  "SI_1",
  "DO_2",
  "RE_2",
  "MI_2",
  "FA_2",
  "SOL_2",
  "LA_2",
  "SI_2",
  "DO_3",
] as const;

export type IPossibleNote = (typeof ALL_POSSIBLE_NOTES)[number];

function App() {
  const [currentNote, setCurrentNote] = useState<IPossibleNote>("FA_1");
  const [inputNote, setInputNote] = useState("");

  function randomizeNote() {
    const pickNote =
      Math.round(Math.random() * ALL_POSSIBLE_NOTES.length) %
      ALL_POSSIBLE_NOTES.length;

    if (ALL_POSSIBLE_NOTES[pickNote] === currentNote) randomizeNote();

    setCurrentNote(ALL_POSSIBLE_NOTES[pickNote]);
  }

  return (
    <Container>
      <Table clave="SOL" note={currentNote} />

      <Input
        value={inputNote}
        onChange={(evt) => setInputNote(evt.target.value)}
        onKeyDown={(evt) => {
          if (evt.key === "Enter") {
            const noteName = currentNote.split("_")[0];
            if (inputNote.toUpperCase() !== noteName) return;

            setInputNote("");
            randomizeNote();
          }
        }}
      />
    </Container>
  );
}

export default App;
