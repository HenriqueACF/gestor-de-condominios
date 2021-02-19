import React, {useState, useEffect} from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CDataTable,
    CButtonGroup,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CFormGroup,
    CLabel,
    CInput,
    CTextarea
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import useApi from '../services/api';

export default () =>{
    const api = useApi();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitleField, setModalTitleField] = useState('');
    const [modalBodyField, setBodyField] = useState('');

    const fields = [
        {label: 'Título',key:'title'},
        {label:'Data de criação', key:'datacreated', _style:{width:'200px'}},
        {label: 'Ações', key:'actions', _style:{width:'1px'}}
    ]

    useEffect(()=>{
        getList();
    },[]);

    const getList = async() =>{
        setLoading(true);
        const result = await api.getWall();
        setLoading(false);
        if(result.error === ''){
            setList(result.list);
        }else{
            alert(result.error);
        }
    }

    handleCloseModal = () =>{
        setShowModal(false);
    }

    handleEditButton = (index) =>{
        setShowModal(true);
    }

    return(
       <> 
        <CRow>
            <CCol>
                <h2>Mural de Avisos</h2>

                <CCard>
                    <CCardHeader>
                        <CButton color="primary">
                            <CIcon name='cil-check' />Novo Aviso
                        </CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable 
                            items={list}
                            fields={fields}
                            loading={loading}
                            noItemsViewSlot=" "
                            hover
                            striped
                            bordered
                            pagination
                            itemsPerPage={5}
                            scopedSlots = {{
                                'actions': (item, index)=>(
                                    <td>
                                        <CButtonGroup>
                                            <CButton color="info" onClick={() =>handleEditButton(index)}>Editar</CButton>
                                            <CButton color="danger">Remover</CButton>
                                        </CButtonGroup>
                                    </td>
                                )
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol> 
        </CRow>

        <CModal show={showModal} onClose={handleCloseModal}>
            <CModalHeader closeButton>Editar aviso</CModalHeader>
            <CModalBody>
                <CFormGroup>
                    <CLabel htmlFor="modal-title">Título do aviso</CLabel>
                    <Cinput
                        type='text'
                        id="modal-title"
                        placeholder="Digite um título para esse aviso."
                        value={modalTitleField}
                        onChange={e =>setModalTitleField(e.target.value)}
                    />
                </CFormGroup>

                <CFormGroup>
                    <CLabel htmlFor="modal-body">Corpo do aviso</CLabel>
                    <CTextarea
                        id="modal-body"
                        placeholder="Digite o conteúdo do aviso."
                        value={modalBodyField}
                        onChange={e =>setModalBodyField(e.target.value)}
                    />
                </CFormGroup>

            </CModalBody>
            <CModalFooter>
                <CButton color="primary">Salvar</CButton>
                <CButton color="secondary">Remover</CButton>
            </CModalFooter>
        </CModal>

       </>
    )
}