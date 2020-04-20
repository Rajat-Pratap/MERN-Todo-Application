import React from 'react'
import './ListItems.css'
import {fontAwesomeIcon, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

function ListItems(props){
    
    const items=props.items
    const listItems=items.map(item=>{
        return (
            <div className="list" key={item._id}>
                <p>
                    <input type="text" id={item._id} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item._id)}} />
                    <span>
                        <FontAwesomeIcon 
                        className='faicons' 
                        icon="trash" 
                        onClick={()=>props.deleteItem(item._id)}
                        />
                    </span>
                </p>
                
            </div>
        )
    })
    return(
    <div>
        <FlipMove duration={250} easing='ease-in-out'>
            {listItems}
        </FlipMove>
    </div>
    )
}

export default ListItems