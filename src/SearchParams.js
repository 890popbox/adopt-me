import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // inside render
  const [pets, setPets] = useState([]);

  // below state declarations
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(()=>{
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds })=> {
      const breedStrings = breeds.map(({name}) => name);
      setBreeds(breedStrings);
    }, error => console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
    <h1>{location}</h1>
      <form onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}>

        <label htmlFor="location">
          Location:
          <input id="location" value={location} placeholder="Location"
          onChange={event=>setLocation(event.target.value)}/>
        </label>

        <AnimalDropDown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
