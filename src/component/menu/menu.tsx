import React from 'react';
import MenuItem from './menu-item';
import {ItemList} from "../../resource/menu/Item-list";
import "../../asset/css/component/menu/menu.css"

const Menu: React.FC<ItemList> = (itemList) => {

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        if (itemList.items.length === 1)
        {
            event.preventDefault();
            alert('At least one country should be on the group.')
        } else
        {
            event.dataTransfer.setData('application/json', JSON.stringify({id: itemList.id, index: index}));
            event.dataTransfer.effectAllowed = 'move';
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        event.preventDefault();

        const data = JSON.parse(event.dataTransfer.getData('application/json'));
        const draggedItemIndex = data.index;
        const fromListId = data.id;

        if (itemList.id === fromListId) {
            const updatedItems = [...itemList.items];
            const [movedItem] = updatedItems.splice(draggedItemIndex, 1);

            updatedItems.splice(index, 0, movedItem);
            itemList.setItems(updatedItems);

        } else
            itemList.handleItemDropBetweenLists(draggedItemIndex, fromListId, itemList.id, index);
    };

    return (
        <div className="menu">
            {itemList.items.map((item, index) => (
                <MenuItem
                    key={item}
                    data={item}
                    index={index}
                    handleDragStart={handleDragStart}
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                />
            ))}
        </div>
    );
};

export default Menu;