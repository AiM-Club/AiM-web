import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";
import type { CardVSProps } from "@/types/VSBattle";

const CardBoard = ({data}: {data: CardVSProps[]}) => {
    return (
        <S.CardBoardWrapper>
            <S.ResultListWrapper>
                {data.map((item) => (
                    <CardVS key={item.id} data={item} />
                ))}
            </S.ResultListWrapper>
            <S.PaginationWrapper>
                <Pagination 
                    currentPage={1}
                    totalPage={1}
                    callback={() => {}}
                />
            </S.PaginationWrapper>
        </S.CardBoardWrapper>
    )
}

export default CardBoard;