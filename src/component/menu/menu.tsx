import React from 'react';
import MenuItem from './menu-item';
import {ItemList} from "../../resource/menu/Item-list";
import "../../asset/css/component/menu/menu.css"

const Menu: React.FC<ItemList> = (ItemList) => {

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        if (ItemList.items.length === 1)
        {
            event.preventDefault();
            alert('At least one country should be on the team.')
        } else
        {
            event.dataTransfer.setData('application/json', JSON.stringify({listId: ItemList.listId, index: index}));
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
        const fromListId = data.listId;

        if (ItemList.listId === fromListId) {
            const updatedItems = [...ItemList.items];
            const [movedItem] = updatedItems.splice(draggedItemIndex, 1);

            updatedItems.splice(index, 0, movedItem);
            ItemList.setItems(updatedItems);

        } else
            ItemList.handleItemDropBetweenLists(draggedItemIndex, fromListId, ItemList.listId, index);
    };

    return (
        <div className="menu">
            {ItemList.items.map((item, index) => (
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