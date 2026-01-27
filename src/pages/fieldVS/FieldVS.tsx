import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/fieldVS/FieldVS.style";
import titleUnion from "@/assets/TitleUnion.svg";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import { useSearchParams } from "react-router-dom";
import { useGetChallengeVS } from "@/api/challenge";
import useSearch from "@/hooks/useSearch";
import { useField } from "@/utils/useField";

const FieldVS = () => {
  const [searchParams] = useSearchParams();
  const fieldId = searchParams.get("field");
  const field = fieldId ? useField(Number(fieldId)) : null;
  const fieldName = field?.name || "전체";
  const { keyword, sort, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => { },
  });
  const { data: challengeVSList, isLoading } = useGetChallengeVS({
    field: fieldName,
    sort: sort,
    keyword: keyword,
    page: 0,
    size: 10
  });

  return (
    <DefaultLayout>
      <S.FieldVSWrapper>
        <S.FieldTopic>
          <img src={titleUnion} />
          {fieldName} 분야_ VS 대결
        </S.FieldTopic>
        <S.FieldVSContent>
          <SearchField
            sorts={[
              { value: "LATEST", label: "최신순" },
              { value: "OLDEST", label: "오래된순" },
              { value: "TITLE", label: "가나다순" },
              { value: "ONGOING", label: "진행중" },
              { value: "FINISHED", label: "진행완료" },
            ]}
            onKeywordChange={handleKeywordChange}
            onSortChange={handleSortChange}
          />
          <CardBoard data={challengeVSList?.data.content || []} isLoading={isLoading} />
        </S.FieldVSContent>
      </S.FieldVSWrapper>
    </DefaultLayout>
  )
}

export default FieldVS;