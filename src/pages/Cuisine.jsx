import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);


    let params = useParams();

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])





    const getCuisine = async (name) => {
        const apiKey=process.env.REACT_APP_WEATHER_API_KEY;
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&cuisine=${name}`);
        const data = await api.json();
      //  console.log(data.results);
        setCuisine(data.results)
    }

    return (
        <Grid
        animate={{opacity: 1}}
        initial={{opacity:0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5 }}
        >
             {cuisine.map((item) => {
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

export default Cuisine


const Grid = styled(motion.div)`
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