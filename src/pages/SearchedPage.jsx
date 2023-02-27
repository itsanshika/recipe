import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import styled   from 'styled-components';





  
function SearchedPage() {

    const [searchPage,setSearchPage]=useState([]);
    const params=useParams();
    console.log(params.search);
      
     useEffect(()=>{
        getSearchPage(params.search)
     },[params.search])
   
    const getSearchPage= async (name)=>
    {
        const apiKey=process.env.REACT_APP_WEATHER_API_KEY;
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&query=${name}`);
        const data = await api.json();
        //console.log(data.results);
        setSearchPage(data.results)

    }






  return (
     <Grid>
             {searchPage.map((item) => {
                return (
                    
                    <Card key={item.id} >
                         <Link to={"/recipie/"+ item.id}>
                        <img src={item.image} alt={item.title}></img>
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                 

                ); 

            })
            }

        </Grid>
  )
}

export default SearchedPage


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;

`;

const Card = styled.div`

img{
    width: 100%;
    border-radius: 2rem;
}

a{
    text-decoration: none;

}

h4
{
text-align: center;
padding: 1rem;

}

`;