import React, { useState, useEffect } from 'react'
import './index.css'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import CustomCard from '../CustomCard'

const Databank = () => {

  const [starWarsCharacter, setStarwarsCharacter] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredCharacter, setFilteredCharacter] = useState([]);


  const getData = async () => {
    let res;
    let page = 1;
    let newData = [];

    while (page === 1 || (false && res?.data?.next)) {
      res = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
      res.data.results.map(character => (
        newData.push(character)
      ))

      page++
    }
    console.log('character', newData);
    setStarwarsCharacter(newData)
  }

  useEffect(() => {
    getData();
  }, []);

  const updateSearch = (e) => {
    setSearchValue(e.target.value)
    const newFilteredCharacter = starWarsCharacter.filter(character => {
      if (e.target.value === '') return false
      return character.name.indexOf(e.target.value) !== -1
    })

    setFilteredCharacter(newFilteredCharacter);
    console.log('filteredCharacter', filteredCharacter);
  }

  return (
    <>
      <Grid item xs={12}>
        <Toolbar className='toolbar'>
          <SearchIcon className='toolbar_icon' />
          <InputBase placeholder="Search…" className='toolbar_input' value={searchValue} onChange={(e) => updateSearch(e)} />
        </Toolbar>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3} className='databank_container'>
          {
            searchValue.length > 0 && filteredCharacter.length < 0 ? (
              <div>
                Loading...
              </div>
            ) : (
                filteredCharacter.map(character => (
                  <CustomCard character={character} />
                ))
              )

          }
        </Grid>
      </Grid>
    </>
  )
}

export default Databank
