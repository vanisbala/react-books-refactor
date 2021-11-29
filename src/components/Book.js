import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'


function Book({data}) {
    
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" class = "dropdown" title={data.title}>
            <Dropdown.Item href="#/action-1" className = "drop-item"><b>Title:</b> {data.title}</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className = "drop-item"><b>Subtitle:</b> {data.subtitle}</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className = "drop-item"><b>Author: </b>{data.author}</Dropdown.Item>
            <Dropdown.Item href="#/action-4" className = "drop-item"><b>Publisher: </b>{data.publisher}</Dropdown.Item>    
            <Dropdown.Item  href="#/action-5" className = "text-wrap drop-item" ><b>Description:</b> {data.description}</Dropdown.Item>
            </DropdownButton>
        </div>
       
    )
}

export default Book
