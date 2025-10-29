import { useState, useEffect } from "react";

import SearchItem from "./SearchItem";
import { debounceUtility, fetchData } from "../utils/util";

import "../App.css";

function Typeahead() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    fetchAllPokemonData();
  }, []);

  const fetchAllPokemonData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=2000`;
    let data = await fetchData(url);
    setPokemon(data.results);
  };

  const getPokemonData = async (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // Filter pokemon whenever search term changes
    const filtered = pokemon.filter((poke) =>
      poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemon]);

  const debouncedFetchData = debounceUtility(getPokemonData, 500);

  return (
    <div className="search-area">
      <input
        type="text"
        id="search"
        className="search"
        placeholder="Search Pokemon here.."
        onChange={debouncedFetchData}
      />
      {searchTerm && (
        <div className="pokemon-list">
          {filteredPokemon.map((poke, index) => (
            <SearchItem key={index} name={poke.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Typeahead;
