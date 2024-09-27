import React from "react";

export interface ItemList {
    id: string;
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
    handleItemDropBetweenLists: (draggedIndex: number, fromListId: string, toListId: string, dropIndex: number) => void;
}