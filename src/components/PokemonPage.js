import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [masterList, setMasterList] = useState([])
  const [run, setRun] = useState(0)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setRun={setRun} />
      <br />
      <Search pokeList={pokeList} setPokeList={setPokeList} masterList={masterList}/>
      <br />
      <PokemonCollection pokeList={pokeList} setPokeList={setPokeList} setMasterList={setMasterList} run={run}/>
    </Container>
  );
}

export default PokemonPage;
