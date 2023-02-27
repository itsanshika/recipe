import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';


function RecipiePage() {
    const [details, setDetails] = useState([]);
    const[active,setActive]=useState("instructions");
    const [ingri,setIngri]=useState([]);
    const params = useParams();

    useEffect(() => {

        getRecipie(params.name);

    }, [params.name])

    //console.log(params.name);

    const getRecipie = async (name) => {
        const apiKey=process.env.REACT_APP_WEATHER_API_KEY;

        const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}`);
        const data = await api.json();
      // console.log(data);
        // setDetails(data.analyzedInstructions[0].steps);

        setDetails(data)
        setIngri(data.extendedIngredients)
        
    }


    return (
        <DetailsWrapper>
            <div>
           <h2>{details.title}</h2> 
           <img src={details.image } alt="" />
           </div>
             
            <Info>
                <Button className={active==='instructions'?'active':''}  onClick={()=>{setActive("instructions")}}>
                    Instructions
                </Button>
                <Button className={active==='ingredients'?'active':''} onClick={()=>{setActive("ingredients")}}>
                    Ingredients
                </Button>
             
            {active==='instructions' && ( <div>

                <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                
              </div>)}
            

                    {active==='ingredients' && ( <ul>
                {ingri.map((item)=>
                {
                    return (<li key={item.id}>{item.original}</li>);
                })}
              </ul>)}
             
            
            </Info>

        </DetailsWrapper>
    )
}

export default RecipiePage


const DetailsWrapper = styled.div`
 margin-top: 10rem;
 margin-bottom: 5rem;
 display: flex;
 .active{ 
    background: linear-gradient(35deg, #494949, #313131);
color: white; 
}
 h2
 {
    margin-botton: 2rem;
 }

 li
 {
    font-size: 1.2rem;
    line-height: 2.5rem;
 }

 ul
 {
    margin-top: 2rem;
 }
 `;

 const Button=styled.div`
 
padding: 1rem 2rem;
color: #313131;
background: white;
margin-right:3rem;
border: 2px solid black;
font-weight: 600;
display: inline-block;


 `;

 const Info=styled.div`
 margin-left:10rem;
 `;