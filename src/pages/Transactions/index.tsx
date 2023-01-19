import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>
              <PriceHighLight variant="income">
                {priceFormatter.format(2000)}
              </PriceHighLight>
            </td>
            <td>Venda</td>
            <td>{dateFormatter.format(new Date("2023-01-01 18:00:00"))}</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>
              <PriceHighLight variant="outcome">2.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>
              <PriceHighLight variant="income">2.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>11/01/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenv de Site</td>
            <td>
              <PriceHighLight variant="outcome">2.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>01/01/2023</td>
          </tr>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
