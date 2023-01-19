import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import "./styles.css";

export function NewTransactionModal() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button violet">Edit profile</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>

            <form action="" className="form">
              <input type="text" placeholder="Descrição" required autoFocus />
              <input type="text" placeholder="Preço" required />
              <input type="text" placeholder="Categoria" required />

              <RadioGroup.Root>
                <div className="transactionType">
                  <RadioGroup.Item value="income" id="r1">
                    <div className="transactionTypeButton">
                      <ArrowCircleUp color="green" /> Entrada
                    </div>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="outcome" id="r1">
                    <div className="transactionTypeButton">
                      <ArrowCircleDown color="red" /> Saída
                    </div>
                  </RadioGroup.Item>
                </div>
              </RadioGroup.Root>

              <div>
                <Dialog.Close asChild>
                  <button type="submit" className="Button green">
                    Cadastrar
                  </button>
                </Dialog.Close>
              </div>
            </form>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
