import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addNote} from '../../../actions/noteActions';


const CreateThoughts = (props) => {
    const[visibleModal, setVisibleModal] = useState(false);
    const[thought, setThought] = useState({title: '', content: ''});
    const dispatch = useDispatch();
    const showModal = () => {
        setVisibleModal(true);
    }
    const handleOk = () => {
        console.log("ok");
        setVisibleModal(false);
    };
    const handleCancel = () => {
        setVisibleModal(false);
    };

    const handleSubmit  = () => {
        dispatch(addNote(thought));
    }

    const handleThought = (event) => {
        setThought({...thought,[event.target.name]: event.target.value})
    }
    return(
        <div>
            <Input id="create-thoughts" placeholder="title" onClick={showModal} /> 
            <Modal title="Create Thought" visible={visibleModal} onOk={handleOk} onCancel={handleCancel} key="submit" footer={[<Button key="submit" onClick={() => {handleOk(); handleSubmit();}}>Submit</Button>]}>
                <Input placeholder="title" name="title" onChange={handleThought}/>
                <TextArea placeholder="content" name="content" onChange={handleThought} />
            </Modal>
        </div>
    );
}

export default CreateThoughts;