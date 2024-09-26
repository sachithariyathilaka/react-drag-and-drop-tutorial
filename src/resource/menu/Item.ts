import React from "react";

export interface Item {
    data: string;
    index: number;
    handleDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
    handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
}