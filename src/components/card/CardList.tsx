import * as S from "./CardList.style";

interface Item {
  id: number;
  title: string;
  tag: string;
}

const mockData: Item[] = [
  { id: 1, title: "제목", tag: "#분야" },
  { id: 2, title: "제목", tag: "#분야" },
  { id: 3, title: "제목", tag: "#분야" },
  { id: 4, title: "제목", tag: "#분야" },
  { id: 5, title: "제목", tag: "#분야" },
  { id: 6, title: "제목", tag: "#분야" },
  { id: 7, title: "제목", tag: "#분야" },
  { id: 8, title: "제목", tag: "#분야" },
  { id: 9, title: "제목", tag: "#분야" },
];

const CardList = () => {
  return (
    <S.CardWrapper>
      <S.Title>HOT 모집글</S.Title>

      <S.ListBox>
        {mockData.map((item) => (
          <S.ListItem key={item.id}>
            <span>{item.title}</span>
            <span className="tag">{item.tag}</span>
          </S.ListItem>
        ))}
      </S.ListBox>
    </S.CardWrapper>
  );
};

export default CardList;
