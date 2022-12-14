import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1e1e1e;

`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;
    gap: 1rem;

    svg{
        fill: red;
        margin-right: 0.5rem;
    }
    
    p{
        &:nth-child(2){
        color: #fff;
    }
        &:nth-child(3){
            font-weight: bold;
            color: red;
        }
    }

`;

interface OpnProps{
    open: boolean
}
export const Menu = styled.ul<OpnProps>`
    width: 700px;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px){
        background-color: #1e1e1e;
        position: absolute;
        top: 50px;
        left: ${({open}:any) => open ? '0' : '-100%'};
        width: 100%;
        height: 92vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    

    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;


    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #ffff;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: white;
        border-bottom: solid 1px red;
        transition: 0.5s all ease;
    }

    @media screen and (max-width: 960px){
        
        width: 100%;
    }
`;

export const MobileIcon = styled.div`
    display: none;
  

    @media (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg{
        fill: #FFFF;
        margin-right: 0.5rem;
        }
    }
`;