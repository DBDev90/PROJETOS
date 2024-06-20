import { useTheme } from "styled-components";
import { Transaction } from "../../@types/Transaction";
import {
  ActionBtn,
  Actions,
  Container,
  DeleteIcon,
  EditIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tablehead,
} from "./styles";
import { formatDate } from "../../utils/formatDate";
import { formatValue } from "../../utils/formatValue";

type Props = {
  data: Transaction[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const Transactiontable = ({ data, onEdit, onDelete }: Props) => {
  const theme = useTheme();

  return (
    <Container>
      <Table>
        <Tablehead>
          <TableRow>
            <TableCell style={{ width: 1 }}>ID</TableCell>
            <TableCell>Título</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell style={{ width: 1 }}>Ações</TableCell>
          </TableRow>
        </Tablehead>
        <TableBody>
          {data.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{formatDate(transaction.created_at)}</TableCell>
              <TableCell>
                {transaction.status === "pending" ? "Pendente" : "Concluída"}
              </TableCell>
              <TableCell
                style={{
                  color:
                    transaction.amount >= 0
                      ? theme.COLORS.success
                      : theme.COLORS.danger,
                }}
              >
                {formatValue(transaction.amount)}
              </TableCell>
              <TableCell>
                <Actions>
                  <ActionBtn
                    $variant="warning"
                    onClick={() => onEdit(transaction.id)}
                  >
                    <EditIcon />
                  </ActionBtn>
                  <ActionBtn
                    $variant="darnger"
                    onClick={() => onDelete(transaction.id)}
                  >
                    <DeleteIcon />
                  </ActionBtn>
                </Actions>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
