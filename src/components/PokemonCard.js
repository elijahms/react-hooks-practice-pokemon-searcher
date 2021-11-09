import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({hp, name, sprites}) {

  const [clicked, setClicked] = useState(false)

  function handlePokeCard() {
    setClicked((clicked) => !clicked)
  }
  
  return (
    <Card>
      <div onMouseEnter={handlePokeCard} onMouseLeave={handlePokeCard}>
        <div className="image">
          <img src={!clicked ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
