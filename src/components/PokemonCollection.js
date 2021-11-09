import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList, setPokeList, setMasterList, run}) {
  
  useEffect(() => {
    console.log("run");
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => {
      setPokeList(data)
      setMasterList(data)
    })
  }, [run])
  
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {[...pokeList].map((poke) => {
        return <PokemonCard hp={poke.hp} name={poke.name} sprites={poke.sprites} key={poke.id} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
