import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContainer, TransactionTable } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>2.000,00</td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>2.000,00</td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>2.000,00</td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>-2.000,00</td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>2.000,00</td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>2.000,00</td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
