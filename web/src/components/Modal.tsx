import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { ReactNode } from "react"

type TModal = {
  trigger?: ReactNode
  children: ReactNode
  onOpen?: (value: boolean) => void
  isOpen: boolean
}

export default function Modal({ trigger, children, onOpen, isOpen }: TModal) {
  return (
    <Dialog.Root onOpenChange={onOpen} open={isOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="h-screen w-screen bg-black/70 fixed top-0 left-0 z-40" />

        <Dialog.Content className="max-w-sm md:max-w-2xl w-full fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[41] bg-white p-8 rounded-md">
          <Dialog.Close className="absolute top-4 right-4">
            <X size={22} />
          </Dialog.Close>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
