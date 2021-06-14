import React, { useState } from 'react'
import SignInComponent from './SignInComponent'
import SignUpComponent from './SignUpComponent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignInModal = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    }

    const toggleTest = () => {
        setModal(!modal);
        toggleNested()

    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Sign In</Button>
            <Button outline color="primary" onClick={toggleTest}>Sign Up</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader >Sign In</ModalHeader>
                <ModalBody>
                    <SignInComponent toggleNested={toggleNested}/>

                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>Create an account</ModalHeader>
                        <ModalBody>
                            <SignUpComponent />
                        </ModalBody>
                        <ModalFooter>
                            <p>Already have an account? <span className="link-primary" onClick={toggleNested}>Sign in here</span></p>
                            <Button color="danger" onClick={toggleAll}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                
                    {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignInModal;