import React from 'react';
import {Item} from "../../resource/menu/Item";
import "../../asset/css/component/menu/menu-item.css"

const MenuItem: React.FC<Item> = (item) => {
    return (
        <div
            className="menu-item"
            draggable
            onDragStart={(event) => item.handleDragStart(event, item.index)}
            onDragOver={(event) => item.handleDragOver(event)}
            onDrop={(event) => item.handleDrop(event, item.index)}>
            {item.data}
        </div>
    );
};

export default MenuItem;
