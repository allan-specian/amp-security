import React, {useState} from 'react';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import {Home} from "../deslogado/home/Home";

export default function Sensor() {


    return (
        <MDBBtn>
            Notifications
            <MDBBadge className='ms-2' color='danger'>
                8
            </MDBBadge>
        </MDBBtn>
    );
}