import ReactModal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}:Readonly<NewTransactionModalProps>){
    return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
        <Container>
            <h2>Cadastrar Transação</h2>

            <input placeholder='Título' type="text" />
            <input placeholder='Valor' type="number" />
            <input placeholder='Categoria' type="text" />
            <button type="submit">Cadastrar</button>
        </Container>
    </ReactModal>
        
    )
}