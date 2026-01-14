import styled from "styled-components";
import Size from "@/assets/Size.png";
import Bold from "@/assets/Bold.png";
import NonBold from "@/assets/NonBold.png";
import NonSize from "@/assets/NonSize.png";

export const WriteFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QuillWrapper = styled.div`
  width: 100%;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;

  .quill {
    background-color: var(--surpace-primary);
    display: flex;
    flex-direction: column;
  }

  .ql-container {
    order: 1;
    height: 26.25rem;
    font: var(--body-r-xl);
    color: var(--text-primary-default);
    border: none;
  }

  .ql-editor {
    height: 26.25rem;
    padding: 1.5rem;

    &::-webkit-scrollbar {
      display: none;
    }

    //placeholder
    &.ql-blank::before {
      color: var(--text-secondary);
      font-style: normal;
      left: 1.5rem;
    }
  }

  b {
    font-weight: bold;
  }

  .ql-toolbar {
    order: 2;
    background-color: var(--surpace-primary);
    border: none;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    padding: 1.5rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // button.ql-active.ql-stroke,
    .ql-stroke {
      stroke: transparent !important;
    }

    .ql-formats {
      margin-right: 2rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .ql-size {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
    }

    .ql-bold {
      background: url(${NonBold}) no-repeat center center;
      background-size: 24px 24px;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      color: transparent;
      border: none;
      padding: 0;

      &.ql-active {
        background: url(${Bold}) no-repeat center center;
        background-size: 24px 24px;
      }
    }

    button img {
      display: none;
    }

    .ql-picker.ql-size .ql-picker-label::before {
      content: "";
      background-image: url(${NonSize});
      background-size: 1.5rem 1.5rem;
      background-position: center;
      background-repeat: no-repeat;
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      cursor: pointer;
      color: white;
      font-size: 1.5rem;
      line-height: 1.6rem;
    }

    .ql-size.ql-picker.ql-expanded .ql-picker-label::before {
      background: url(${Size}) no-repeat center center;
      background-size: 1.5rem 1.5rem;
    }

    .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
      display: none;
    }

    .ql-picker-label {
      color: var(--text-secondary);
      display: inline-block;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 0;
      margin: auto;
    }

    .ql-picker.ql-size {
      position: relative;
    }

    .ql-picker.ql-size .ql-picker-options {
      background-color: var(--surpace-primary);
      border: 1px solid var(--surpace-tertiary);
      border-radius: 0.25rem;
      height: 12rem;
      width: 6.7rem;
      overflow-y: auto;
      padding: 0 0.75rem;
      border: none;
      background-color: var(--surpace-secondary);
      position: absolute;
      bottom: auto;
      top: -13rem;
      left: -1rem;
      transform: none;

      &::-webkit-scrollbar {
        display: none;
      }

      /* 위에 그라데이션 */
      &::before {
        content: "";
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        height: 2rem;
        background: linear-gradient(to bottom, var(--surpace-secondary), transparent);
        pointer-events: none;
        z-index: 1;
        border-radius: 0.25rem 0.25rem 0 0;
        display: block;
        margin-bottom: -2rem;
      }

      /* 아래에 그라데이션 */
      &::after {
        content: "";
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2rem;
        background: linear-gradient(to top, var(--surpace-secondary), transparent);
        pointer-events: none;
        z-index: 1;
        border-radius: 0 0 0.25rem 0.25rem;
        display: block;
        margin-top: -2rem;
      }
    }

    .ql-picker.ql-size .ql-picker-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      padding: 0.625rem 0;
      font: var(--body-r-l);
      position: relative;
      cursor: pointer;
      &.ql-selected {
        color: var(--text-primary-default);
        border-top: 1px solid var(--surpace-tertiary);
        border-bottom: 1px solid var(--surpace-tertiary);
      }
      &:hover {
        color: var(--text-primary-default);
      }
    }

    ///////////////////////////////////////////폰트 크기 설정////////////////////////////////////
    .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
      content: "12pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="13px"]::before {
      content: "13pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
      content: "14pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="15px"]::before {
      content: "15pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
      content: "16pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="17px"]::before {
      content: "17pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
      content: "18pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="19px"]::before {
      content: "19pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
      content: "20pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="21px"]::before {
      content: "21pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="22px"]::before {
      content: "22pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="23px"]::before {
      content: "23pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before {
      content: "24pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="25px"]::before {
      content: "25pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="26px"]::before {
      content: "26pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="27px"]::before {
      content: "27pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="28px"]::before {
      content: "28pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="29px"]::before {
      content: "29pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="30px"]::before {
      content: "30pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="31px"]::before {
      content: "31pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="32px"]::before {
      content: "32pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="33px"]::before {
      content: "33pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="34px"]::before {
      content: "34pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="35px"]::before {
      content: "35pt";
    }
    .ql-picker.ql-size .ql-picker-item[data-value="36px"]::before {
      content: "36pt";
    }
  }
`;
