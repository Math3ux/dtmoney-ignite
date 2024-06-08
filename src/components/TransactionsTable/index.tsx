import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        fetch('/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>07/06/2024</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100,00</td>
                        <td>Casa</td>
                        <td>01/06/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}