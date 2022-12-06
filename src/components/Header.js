import styled from "styled-components";

const Header = (props) =>{
    return <Nav> 
        <Logo><img src="/Images/logo.png" alt ="Disney+"/></Logo>
        <NavMenu>
            <a href = '/home'>
                <img src ='/Images/home-icon.svg' alt = 'Home'/>
            </a>
            <span> HOME </span>
            
        </NavMenu>
        </Nav>;

};

const Nav = styled.nav`
position: fixed;
top: 0;

left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: centre;
padding: 0 36px;
letter-spacing: 10px;
z-index:3;

`;

const Logo = styled.a`
padding: 0;
width: 90px;
margin-top:4px;
max-height: 70px;
font-size;
display: inline-block;

img{
    display: block;
    width: 100%;
}
`;

const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
margin: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;

a{
    display: flex;
    align-items: center;
    padding: 0 12px;
}
img{
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
    align-item: center;

}

span{
    color: rgb(249,249,249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08px;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
}

// @media (max-width: 768px){
//     display: none;
// }
`;



export default Header;