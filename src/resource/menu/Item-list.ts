import React from "react";

export interface ItemList {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
    listId: string;
    handleItemDropBetweenLists: (draggedIndex: number, fromListId: string, toListId: string, dropIndex: number) => void;
}