import * as S from "./Files.style";
import Clip from "@/assets/FileClip.svg";

interface FilesProps {
  files: File[];
  setFiles?: (files: File[]) => void;
}

const Files = ({ files, setFiles }: FilesProps) => {

  const handleFileDelete = (index: number) => {
    if (setFiles) {
      setFiles(files.filter((_, i) => i !== index));
    }
  }

  return (
    <S.FilesWrapper>
      {files.map((file, index) => (
        <S.File key={index}>
          <S.NameWrapper>
            <S.FileIcon src={Clip} />
            <p>{file.name}</p>
          </S.NameWrapper>
          {setFiles && <S.FileDeleteBtn onClick={() => handleFileDelete(index)} />}
        </S.File>
      ))}
    </S.FilesWrapper>
  )
}

export default Files;