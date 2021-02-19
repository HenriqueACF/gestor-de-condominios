import React, {useState, useEffect} from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CDataTable,
    CButtonGroup
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import useApi from '../services/api';

export default () =>{
    const api = useApi();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

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

    return(
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
                                            <CButton color="info">Editar</CButton>
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
    )
}