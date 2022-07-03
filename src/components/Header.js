import React from 'react';
import styled from 'styled-components';

function Header() {
  const HeaderStyle = styled.div` 
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
      
      
      header  img{
        object-fit:contain;
      }
      
     
    }
    
 
  }
  
  
}


.leaderboard {
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);
}


  
  `
  return (
    <HeaderStyle>
      <article class="leaderboard">
  <header>

    <img src="./logo192.png" alt="Forbes" />

    <h1 class="leaderboard__title"><span class="leaderboard__title--top">FlatLine Agency</span><span class="leaderboard__title--bottom">Assesment</span></h1>
  </header>
  </article>
      </HeaderStyle>
  )
}

export default Header