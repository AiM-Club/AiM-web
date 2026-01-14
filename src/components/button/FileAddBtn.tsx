import { useRef, useState } from "react";
import * as S from "./FileAddBtn.style";
import Clip from "@/assets/FileClip.svg";

const FileAddBtn = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles([...files, file]);
    }
  }

  const handleFileDelete = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  }

  const handleAddClick = () => {
    fileInputRef.current?.click();
  }

  return (
    <S.FileAddWrapper>
      <S.FileAddBtnWrapper onClick={handleAddClick} >
        <S.FileInput ref={fileInputRef} type="file" onChange={handleFileAdd} />
        <S.FileAddBtn>
          <S.FileIcon src={Clip} />
          <p>파일을 첨부하세요</p>
        </S.FileAddBtn>
      </S.FileAddBtnWrapper>
      {files.map((file, index) => (
        <S.FileAddBtnWrapper key={index}>
          <p>{file.name}</p>
          <S.FileDeleteBtn onClick={() => handleFileDelete(index)} />
        </S.FileAddBtnWrapper>
      ))}
    </S.FileAddWrapper>
  )
}

export default FileAddBtn;