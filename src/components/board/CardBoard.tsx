import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import CardVS from "../card/cardvs/CardVS";
import SearchInput from "../field/SearchInput";
import Pagination from "../pagination/Pagination";
import Select from "../Select/Select";
import * as S from "./CardBoard.style";
import type { CardVSProps } from "@/types/VSBattle";

interface CardBoardProps {
    data: CardVSProps[];
    writePath?: string;
}

const CardBoard = ({data, writePath}: CardBoardProps) => {
    const navigate = useNavigate();

    return (
        <S.CardBoardWrapper>
            {/* <S.SearchMenuWrapper>
                <SearchInput />
                <Select placeholder="정렬" />
            </S.SearchMenuWrapper> */}
            {data.length > 0 ? (
                <>
                    <S.ResultListWrapper>
                        {data.map((item) => (
                            <CardVS key={item.id} data={item} />
                        ))}
                    </S.ResultListWrapper>
                    {writePath && 
                        <S.ButtonWrapper>
                            <Button onClick={() => navigate(writePath)}>작성</Button>
                        </S.ButtonWrapper>
                    }
                    <S.PaginationWrapper>
                        <Pagination 
                            currentPage={1}
                            totalPage={1}
                            callback={() => {}}
                        />
                    </S.PaginationWrapper>
                </>
            ) : (
                <S.EmptyState>
                    검색 결과가 없습니다
                </S.EmptyState>
            )}
            
        </S.CardBoardWrapper>
    )
}

export default CardBoard;