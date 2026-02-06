import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import * as S from "./Modal.style";

interface ModalProps {
  trigger?: React.ReactNode; // optional 처리
  children:
  | React.ReactNode
  | ((setOpen: (open: boolean) => void) => React.ReactNode);
  open?: boolean; // 외부에서 제어 가능
  onOpenChange?: (open: boolean) => void; // 외부 제어용 콜백
}

const Modal: React.FC<ModalProps> = ({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = isControlled ? controlledOnOpenChange! : setUncontrolledOpen;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <S.DialogOverlay />
        <S.DialogContent aria-describedby={undefined}>
          <S.ContentBody>
            {typeof children === "function" ? children(setOpen) : children}
          </S.ContentBody>
        </S.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;