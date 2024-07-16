import { Table } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const data = [
    {
        "entryPoint": 123.45,
        "PnL": "5.67%",
        "Percent": "1%",
        "Taik": 10.00,
        "NumAttempts": 3,
        "Margin": "20%",
        "Size": 1500,
        "Time": "2024-07-01 14:30"
    },
    {
        "entryPoint": 127.89,
        "PnL": "-2.34%",
        "Percent": "1%",
        "Taik": 5.50,
        "NumAttempts": 1,
        "Margin": "15%",
        "Size": 2000,
        "Time": "2024-07-02 10:15"
    },
    {
        "entryPoint": 130.56,
        "PnL": "3.78%",
        "Percent": "1%",
        "Taik": 8.25,
        "NumAttempts": 2,
        "Margin": "18%",
        "Size": 1750,
        "Time": "2024-07-03 09:45"
    }
];

const getRowColor = (pnL) => {
    return parseFloat(pnL) > 0 ? 'green' : 'red';
};

const StyledTable = styled(Table)`
    width: 100%;
    border: 1px solid #ddd;
    margin: 20px 0;
    border-collapse: collapse;

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }

    tbody tr:hover {
        background-color: #f1f1f1;
    }
`;

const StyledTableRow = styled.tr`
    ${({ PnL }) => css`
        color: ${getRowColor(PnL)};
    `}
`;

export const TablePage = () => {
    return (
        <StyledTable striped bordered hover>
            <thead>
                <tr>
                    <th>Точка входа</th>
                    <th>PnL %</th>
                    <th>%</th>
                    <th>Taik</th>
                    <th>Кол-во уср.</th>
                    <th>Маржа</th>
                    <th>Размер</th>
                    <th>Время</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <StyledTableRow key={index} PnL={item.PnL}>
                        <td>{item.entryPoint}</td>
                        <td>{item.PnL}</td>
                        <td>{item.Percent}</td>
                        <td>{item.Taik}</td>
                        <td>{item.NumAttempts}</td>
                        <td>{item.Margin}</td>
                        <td>{item.Size}</td>
                        <td>{item.Time}</td>
                    </StyledTableRow>
                ))}
            </tbody>
        </StyledTable>
    );
}
