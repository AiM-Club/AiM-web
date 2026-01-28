import styled from "styled-components";

export const RankingListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    //왜 이걸 추가해야 스크롤이 한개만 생기지 ;;
    height: calc(100vh - 15.5rem);
`;

export const RankingListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RankContentWrapper =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (max-width: 560px){
      gap: 1.5rem;
    }
`;

export const RankContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 560px){
      gap: 0.5rem;
    }
`;