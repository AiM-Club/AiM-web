import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import * as S from "./FileAddBtn.style";
import Clip from "@/assets/FileClip.svg";
import Files from "./Files";

export interface FileAddBtnRef {
  getFiles: () => File[];
}

const FileAddBtn = forwardRef<FileAddBtnRef>((_, ref) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getFiles: () => files,
  }));

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles([...files, file]);
    }
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
      <Files files={files} setFiles={setFiles} />
    </S.FileAddWrapper>
  )
});

FileAddBtn.displayName = "FileAddBtn";

export default FileAddBtn;