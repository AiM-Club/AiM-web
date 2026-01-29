import * as S from "./WriteField.style";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface WriteFieldRef {
  getData: () => string;
}

const WriteField = forwardRef<WriteFieldRef>((_, ref) => {
  const [content, setContent] = useState<string>("");
  const quillRef = useRef<ReactQuill>(null);

  useImperativeHandle(ref, () => ({
    getData: () => content,
  }));
  const sizes = ['12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '30px', '31px', '32px', '33px', '34px', '35px', '36px'];

  useEffect(() => {
    const size = Quill.import('attributors/style/size');
    size.whitelist = sizes;
    Quill.register(size, true);

    const bold = Quill.import('formats/bold');
    bold.tagName = 'b';
    Quill.register(bold, true);
  }, []);

  //폰트 크기 추적
  useEffect(() => {
    const setDefaultSize = () => {
      const label = document.querySelector('.ql-picker.ql-size .ql-picker-label');
      if (content === "" && label) {
        label.setAttribute('data-value', '18px');
        const quill = quillRef.current?.getEditor();
        if (quill) {
          quill.format('size', '18px', 'user');
        }
      }
    };

    let hasScrolledToCenter = false;
    let isPickerOpen = false;

    const updateSelectedItem = (shouldScrollToCenter = false) => {
      const label = document.querySelector('.ql-picker.ql-size .ql-picker-label');
      if (!label) return;

      let selectedValue = label.getAttribute('data-value');
      if (!selectedValue) {
        selectedValue = '18px';
        label.setAttribute('data-value', '18px');
      }

      const pickerOptions = document.querySelector('.ql-picker.ql-size .ql-picker-options') as HTMLElement;
      if (!pickerOptions) return;

      const items = pickerOptions.querySelectorAll('.ql-picker-item');
      let selectedItem: HTMLElement | null = null;

      Array.from(items).forEach((item) => {
        const itemElement = item as HTMLElement;
        const itemValue = item.getAttribute('data-value');

        if (itemValue === selectedValue) {
          itemElement.style.color = 'var(--text-primary-default)';
          itemElement.style.borderTop = '1px solid var(--surpace-tertiary)';
          itemElement.style.borderBottom = '1px solid var(--surpace-tertiary)';
          selectedItem = itemElement;
        } else {
          itemElement.style.color = '';
          itemElement.style.borderTop = '';
          itemElement.style.borderBottom = '';
        }
      });

      // 선택된 항목을 스크롤 가운데로 이동 (처음 열릴 때만)
      if (selectedItem && shouldScrollToCenter && !hasScrolledToCenter) {
        const containerHeight = pickerOptions.clientHeight;
        const itemOffsetTop = (selectedItem as HTMLElement).offsetTop;
        const itemHeight = (selectedItem as HTMLElement).offsetHeight;
        const scrollTop = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);

        pickerOptions.scrollTop = Math.max(0, scrollTop);
        hasScrolledToCenter = true;
      }
    };

    const observer = new MutationObserver(() => {
      const picker = document.querySelector('.ql-picker.ql-size');
      const wasOpen = isPickerOpen;
      isPickerOpen = picker?.classList.contains('ql-expanded') || false;

      // picker가 닫혔다가 다시 열릴 때 스크롤 초기화
      if (!wasOpen && isPickerOpen) {
        hasScrolledToCenter = false;
        setTimeout(() => updateSelectedItem(true), 50);
      } else {
        updateSelectedItem(false);
      }
    });

    const toolbar = document.querySelector('.ql-toolbar');
    if (toolbar) {
      observer.observe(toolbar, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-value', 'class']
      });
    }

    // 초기 실행
    setTimeout(() => {
      setDefaultSize();
      updateSelectedItem(false);
    }, 100);

    // 주기적 업데이트 (스크롤 없이)
    const interval = setInterval(() => updateSelectedItem(false), 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [content]);

  const modules = {
    toolbar: {
      container: [
        [{ size: sizes }],
        ['bold'],
      ],
    },
  };

  return (
    <S.WriteFieldWrapper>
      <S.QuillWrapper>
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
          placeholder="내용을 입력하세요"
        />
      </S.QuillWrapper>
    </S.WriteFieldWrapper>
  );
});

WriteField.displayName = "WriteField";

export default WriteField;