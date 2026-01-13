import * as S from "./CategoryBtn.style";

interface CategoryBtnProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const CategoryBtn = ({ label, isActive, onClick }: CategoryBtnProps) => {
    return (
        <S.CategoryButton $isActive={isActive} onClick={onClick}>
            {label}
        </S.CategoryButton>
    );
};

export default CategoryBtn;

