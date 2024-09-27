import React, { useState } from 'react';
import Menu from "../component/menu/menu";
import "../asset/css/page/home-page.css"

const HomePage: React.FC = () => {
  const [groupA, setGroupA] = useState<string[]>(['India', 'Australia', 'USA', 'Bangladesh', 'South Africa']);
  const [groupB, setGroupB] = useState<string[]>(['Sri Lanka', 'England', 'New Zealand', 'Pakistan', 'Nepal']);

  const handleItemDropBetweenMenus = (draggedIndex: number, fromListId: string, toListId: string, dropIndex: number) => {

    if (fromListId === 'groupA' && toListId === 'groupB') {
      const newItem = groupA[draggedIndex];
      const updatedGroupA = groupA.filter((_, i) => i !== draggedIndex);
      const updatedGroupB = [...groupB];

      updatedGroupB.splice(dropIndex, 0, newItem);
      setGroupA(updatedGroupA);
      setGroupB(updatedGroupB);

    } else if (fromListId === 'groupB' && toListId === 'groupA') {
      const newItem = groupB[draggedIndex];
      const updatedGroupB = groupB.filter((_, i) => i !== draggedIndex);
      const updatedGroupA = [...groupA];

      updatedGroupA.splice(dropIndex, 0, newItem);
      setGroupA(updatedGroupA);
      setGroupB(updatedGroupB);
    }
  };

  return (
      <div>
        <h1 className='title'>ICC Cricket World Cup 2025</h1>
        <div className="container">
          <div>
            <h3 className="title">Group A</h3>
            <Menu
                id="groupA"
                items={groupA}
                setItems={setGroupA}
                handleItemDropBetweenLists={handleItemDropBetweenMenus}
            />
          </div>
          <div>
            <h3 className="title">Group B</h3>
            <Menu
                id="groupB"
                items={groupB}
                setItems={setGroupB}
                handleItemDropBetweenLists={handleItemDropBetweenMenus}
            />
          </div>
        </div>
      </div>
  );
};

export default HomePage;
