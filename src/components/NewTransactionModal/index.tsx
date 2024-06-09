import ReactModal from "react-modal";
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}:Readonly<NewTransactionModalProps>){
    return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
        <button type="button" onClick={onRequestClose} className="react-modal-close"><img src={closeImg} alt="Fechar Modal" /></button>
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