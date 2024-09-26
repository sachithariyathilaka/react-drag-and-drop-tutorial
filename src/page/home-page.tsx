import React, { useState } from 'react';
import Menu from "../component/menu/menu";
import "../asset/css/page/home-page.css"

const HomePage: React.FC = () => {
  const [teamA, setTeamA] = useState<string[]>(['A', 'B', 'C']);
  const [teamB, setTeamB] = useState<string[]>(['D', 'E', 'F']);

  const handleItemDropBetweenMenus = (draggedIndex: number, fromListId: string, toListId: string, dropIndex: number) => {

    if (fromListId === 'teamA' && toListId === 'teamB') {
      const newItem = teamA[draggedIndex];
      const updatedTeamA = teamA.filter((_, i) => i !== draggedIndex);
      const updatedTeamB = [...teamB];

      updatedTeamB.splice(dropIndex, 0, newItem);
      setTeamA(updatedTeamA);
      setTeamB(updatedTeamB);

    } else if (fromListId === 'teamB' && toListId === 'teamA') {
      const newItem = teamB[draggedIndex];
      const updatedTeamB = teamB.filter((_, i) => i !== draggedIndex);
      const updatedTeamA = [...teamA];

      updatedTeamA.splice(dropIndex, 0, newItem);
      setTeamA(updatedTeamA);
      setTeamB(updatedTeamB);
    }
  };

  return (
      <div className="drag-drop-container">
        <div>
          <h3>Team A</h3>
          <Menu
              items={teamA}
              setItems={setTeamA}
              listId="teamA"
              handleItemDropBetweenLists={handleItemDropBetweenMenus}
          />
        </div>
        <div>
          <h3>Team B</h3>
          <Menu
              items={teamB}
              setItems={setTeamB}
              listId="teamB"
              handleItemDropBetweenLists={handleItemDropBetweenMenus}
          />
        </div>
      </div>
  );
};

export default HomePage;
