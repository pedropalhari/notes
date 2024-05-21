import styled from "@emotion/styled";
import { IPossibleNote } from "./App";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  position: relative;
`;

const Note = styled.div`
  width: 48px;
  height: 44px;
  border-radius: 50%;
  background-color: black;

  position: absolute;
  transition: all .2s;
`;

const Line = styled.div`
  background-color: black;
  width: 400px;
  height: 2px;
`;

const SupportLine = styled(Line)`
  width: 100px;
`;

const NOTE_HEIGHT_MAP = {
  SOL: {
    DO_1: 84 + 21 * -3,
    RE_1: 84 + 21 * -2,
    MI_1: 84 + 21 * -1,
    FA_1: 84 + 21 * 0,
    SOL_1: 84 + 21 * 1,
    LA_1: 84 + 21 * 2,
    SI_1: 84 + 21 * 3,
    DO_2: 84 + 21 * 4,
    RE_2: 84 + 21 * 5,
    MI_2: 84 + 21 * 6,
    FA_2: 84 + 21 * 7,
    SOL_2: 84 + 21 * 8,
    LA_2: 84 + 21 * 9,
    SI_2: 84 + 21 * 10,
    DO_3: 84 + 21 * 11,
  },
};

interface TableProps {
  clave: "SOL" | "FA";
  note: IPossibleNote;
}

export default function Table(props: TableProps) {
  const noteHeight = NOTE_HEIGHT_MAP[props.clave as "SOL"][props.note];

  return (
    <Container>
      <img src="/sol.webp" style={{ position: "absolute", width: 200, left: -70, bottom: -8 }} />

      <SupportLine />
      <SupportLine />

      <Line />
      <Line />
      <Line />
      <Line />
      <Line />

      <SupportLine />
      <SupportLine />

      <Note style={{ bottom: noteHeight }} />
    </Container>
  );
}
