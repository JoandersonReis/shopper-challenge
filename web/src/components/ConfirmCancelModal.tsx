import { CheckCircle, XCircle } from "lucide-react"
import { ReactNode } from "react"
import Button from "./Button"
import Modal from "./Modal"

type TConfirmCancelModal = {
  onConfirm: () => void
  onOpen: (value: boolean) => void
  children: ReactNode
  isOpen: boolean
  disabled?: boolean
}

export default function ConfirmCancelModal({
  onConfirm,
  onOpen,
  children,
  isOpen,
  disabled = false,
}: TConfirmCancelModal) {
  const handleOnConfirm = () => {
    onConfirm()
    onOpen(false)
  }

  return (
    <Modal onOpen={onOpen} isOpen={isOpen}>
      <div className="flex flex-col gap-4">
        {children}

        <div className="grid grid-cols-2 gap-3">
          <Button onClick={handleOnConfirm} disabled={disabled}>
            <CheckCircle size={18} />
            Confirmar
          </Button>

          <Button
            className="bg-red-500 border-red-500 hover:text-red-500"
            onClick={() => onOpen(false)}
          >
            <XCircle size={18} />
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  )
}
