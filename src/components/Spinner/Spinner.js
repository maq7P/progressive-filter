import React from "react";
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Spinner variant={'primary'} animation="grow" className='position-absolute' style={{top: '45%'}}/>
        </div>
    )
}
export default Loader