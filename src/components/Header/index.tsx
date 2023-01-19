import { HeaderContainer, HeaderContent } from "./style";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  );
}
