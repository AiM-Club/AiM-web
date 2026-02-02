import ReactDOM from "react-dom";
import * as S from "./Loading.style";

const Loading = () => {
    return ReactDOM.createPortal(
        <S.LoadingContainer>
            <S.LoadingSpinner />
        </S.LoadingContainer>,
        document.getElementById("root") as HTMLElement
    );
};

export default Loading;