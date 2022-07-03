import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from "react-router-dom";


function ProductComponent() {
  const products = useSelector(state => state.allProducts.products);
  const renderList = products.map((product,index) => {
    const { id, title,author} = product;
  
    const CardStyled = styled.div` 




.leaderboard {
  max-width: 100%;
  width: 100%;
  border-radius: 12px;
  
  header {
    --start: 15%;
    
    height: 130px;
    background-image: repeating-radial-gradient(circle at var(--start), transparent 0%, transparent 10%, rgba(54, 89, 219, .33) 10%, rgba(54, 89, 219, .33) 17%), linear-gradient(to right, #5b7cfa, #3659db);
    color: #fff;
    position: relative;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    
    .leaderboard__title {
      position: absolute;
      z-index: 2;
      top: 50%;
      right: calc(var(--start) * .75);
      transform: translateY(-50%);
      text-transform: uppercase;
      margin: 0;
      
      span {
        display: block;
      }
      
      &--top {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 6.5px;
      }
      
      &--bottom {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 3.55px;
        opacity: .65;
        transform: translateY(-2px);
      }
    }
    
    .leaderboard__icon {
      fill: #fff;
      opacity: .35;
      width: 50px;
      position: absolute;
      top: 50%;
      left: var(--start);
      transform: translate(-50%, -50%);
      border: 2px solid red;
    }
  }
  
  &__profiles {
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    padding: 15px 15px 20px;
    display: grid;
    row-gap: 8px;
  
  }
  
  &__profile {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 10px 30px 10px 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    cursor: pointer;
    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
    background-color: #fff;
    
    /* &:hover {
      transform: scale(1.2);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    } */
  }
  
  &__picture {
    max-width: 100%;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
  
  }
  
  &__name {
    color: #979cb0;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.64px;
    margin-left: 12px;
    
  }
  
  &__value {
    color: #35d8ac;
    font-weight: 700;
    font-size: 34px;
    text-align: right;
   
    & > span {
      opacity: .8;
      font-weight: 600;
      font-size: 13px;
      margin-left: 3px;
     
    }
  }
}




 /* bare minimuu styles */

body {
  margin: 0;
  background-color: #eaeaea;
  display: grid;
  height: 100vh;
  place-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  padding:5rem;
}

.leaderboard {
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
}

a{
  text-decoration: none;
}

    
    `
  return (
    <CardStyled>
     {/* <div classNameName='wrapper' >
      <div classNameName='card' key={id}>
        <div classNameName='card-image'>
          <img src={author.avatar} alt={title} />
        </div>
        <div classNameName='name'>{author.name}</div>
        <div classNameName='card-title'>{title}</div>
        <div classNameName='card-date'>{publishDate}</div>


        </div>
     </div> */}

<article class="leaderboard">
  {/* <header>

  

    <h1 class="leaderboard__title"><span class="leaderboard__title--top">Forbes</span><span class="leaderboard__title--bottom">Leaderboard</span></h1>
  </header> */}
  
  <main className="leaderboard__profiles">
{/* <Link to={`/product/${id}`}>  */}
    <article class="leaderboard__profile">
    <img src={author.avatar} alt={title} />
      <span class="leaderboard__name">{author.name}</span>
      <span class="leaderboard__value">View More
      {/* <span>and</span> */}
      </span>
    </article>
    {/* </Link> */}
   
    
    
    
   

  </main>

  </article>

      </CardStyled>
  )
  });
  return <>{renderList}</>;
}

export default ProductComponent