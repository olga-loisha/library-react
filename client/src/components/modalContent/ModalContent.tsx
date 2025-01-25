import { useContext } from 'react';

import './ModalContent.css';
import { ModalContentProps } from '../../models';
import Button from '../button/Button';
import { ThemeContext } from '../../contexts/themeContext';
import { MdClose } from 'react-icons/md';

const ModalContent = (props: ModalContentProps) => {
    const { onClose } = props;
    const { currentTheme } = useContext(ThemeContext);

    return <div className="modal-backdrop">
        <div className={`modal modal-${currentTheme}`}>
            <header className="modal-header">
                <h4>How many copies should be yours?</h4>
                <MdClose onClick={onClose} />
            </header>
            <section className="modal-content">
                <div className="quantity"></div>
            </section>
            <div className="action-buttons-container">
                <Button onButtonClick={onClose}>Confirm</Button>
            </div>
        </div>
    </div>
};

export default ModalContent;