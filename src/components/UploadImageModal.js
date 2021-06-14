/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UploadImageComponent from './UploadImageComponent'

const UploadImageModal = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="success" onClick={toggle}>Upload Image</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader >Upload Image</ModalHeader>
                <ModalBody>
                    <UploadImageComponent />
        </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UploadImageModal;