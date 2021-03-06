import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    height: 100vh;
    transition: background-color .3s;
    position:relative;
    justify-content:center;
  }

  ul, li{
      list-style-type:none;
  }

  .wrapper {
      width: 800px;
      margin: 2rem auto;
      position:relative;
      display:block;
  }

  .contents{
      width:100%;
      padding-top: 10rem;
  }

  .secondary{
    color: ${({ theme }) => theme.secondary};
  }


  h2{
    font-size: 3.3rem;
    font-weight:normal;
    line-height: 1.2;
  }


  .introDiv{
    display:flex;
    align-items:center;
  }

  .toggleDiv{
    position:absolute;
    right:0;
    display:flex;
    align-items:center;
    margin-bottom:50px;
}  

.icon{
    fill: ${({ theme }) => theme.secondary};
}

  .switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 45px;
    height: 25px;
    background: ${({ theme }) => theme.point};
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
    margin-right:8px;
  }

  .switch-label .switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 35px;
    transition: 0.2s;
    background: ${({ theme }) => theme.body};
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  
  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  
  .switch-label:active .switch-button {
    width: 60px;
  }

  .mail {
    overflow: hidden;
    position: relative;
    cursor:pointer;
    padding: 5px;
    box-sizing:border-box;
    color: ${({ theme }) => theme.point};
    
    span {
      z-index: 20;
    }

    &:before{
        position: absolute;
        top: -1px;
        height:97%;
        width:100%;
        border-width: 0 0 2px 0;
        border-color:${({ theme }) => theme.point};
        border-style:solid;
        z-index: -15;
        opacity:0;
        content: "";
    }
    
  }
  
  .mail:hover {

    color:${({ theme }) => theme.point};

    &:before{
        opacity:1;
        z-index:10;
    }
  }

  ul.workGallery{
      display:flex;
      flex-diraction:column;
      flex-wrap:wrap;
      justify-content:space-between;
  }
  
  li.workLi{
    overflow: hidden;
    width: 100%;
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
  }

.thumbnail{
    &:after {
        background: #red;
        content: "";
        width: 100%
        height:100%;
        z-index: -10;
        position:absolute;
      }
    margin-bottom: 8px;
}

.thumbnail: hover{
      
    &:after {
        z-index:10;
      } 
  }

  .workLi img{
      width:100%;
  }

  div.portfolioImg{
      width: 40%;
  }

  div.contentsDiv{
      width:58%;
      padding: 10px;
  }

  .links{
      font-family:'mono';
      font-size:0.8rem;
      margin: 5px 5px 5px 0px;
      padding:5px 8px;
      border-radius:3px;
      border:1px solid ${({ theme }) => theme.point};
      color:${({ theme }) => theme.point};

  }

  .links:hover{
    border:1px solid ${({ theme }) => theme.point};
    background-color:${({ theme }) => theme.point};
    color: ${({ theme }) => theme.body};
}


  .linkWrapper{
      margin: 20px 0 5px 0;
  }

  .skill {
      padding-right: 5px;
      opacity: 0.5;
      border-radius: 20px;
      font-size:0.9rem;
      margin: 10px 0;
  }

  .skillDesc{
      margin-top: 3px;
      font-family:"regular";
      font-size:0.9rem;
  }

  span.herstory{
      font-size:0.9rem;
      width: 160px;
      padding:0.8rem;
      display:flex;
      border: 1px solid ${({ theme }) => theme.point};
      color:${({ theme }) => theme.point};
      align-items:center;
  }

  span.herstory:hover {
    color:${({ theme }) => theme.body};
	background-color:${({ theme }) => theme.point};
  }

  span.herstory:hover > svg{
	fill:${({ theme }) => theme.body};
  }

  span.herstory svg{
    fill:${({ theme }) => theme.point};
    margin-left:10px;
  }

  div.herStoryDiv {
    margin-top:1rem;
    width: 95%;
    padding: 50px;
    background:${({ theme }) => theme.dim};
}

  footer{
    width:100%;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-bottom: 3rem;
    font-family:'regular';
    font-size: 0.8rem;
  }

  .github,
  .linkedIn{
    fill: ${({ theme }) => theme.text};
}

  .github:hover, .linkedIn:hover{
    fill:${({ theme }) => theme.point};
  }


  @media (max-width: 767px) {

    .wrapper {
        width: 88%;
    }

    h2{
        font-size:2.2rem;
    }

    ul.workGallery{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        position:relative;
    }

    li.workLi{
        flex-direction:column;
        width: 100%;
        display:flex;
        justify-content: space-between;
        margin-top: 20px;
      }


      div.portfolioImg{
        width: 100%;
    }
  
    div.contentsDiv{
        width:100%;
        padding: 10px;
    }
  

  }

  `;
