import styled from "styled-components";

const Header = (props) =>{
    return <Nav> 
        <Logo><img src="/Images/logo.png" alt ="Disney+"/></Logo>
        <NavMenu>
            <a href = '/home'>
                <img src ='/Images/home-icon.svg' alt = 'Home'/>
                <span> HOME </span>
            </a>
            <a href = '/home'>
                <img src ='/Images/search-icon.svg' alt = 'Search'/>
                <span> SEARCH </span>
            </a>
            <a href = '/home'>
                <img src ='/Images/watchlist-icon.svg' alt = 'Watchlist'/>
                <span> WATCHLIST </span>
            </a>
            <a href = '/home'>
                <img src ='/Images/original-icon.svg' alt = 'Originals'/>
                <span> ORIGINALS </span>
            </a>
            <a href = '/home'>
                <img src ='/Images/movie-icon.svg' alt = 'Movies'/>
                <span> MOVIES </span>
            </a>
            <a href = '/home'>
                <img src ='/Images/series-icon.svg' alt = 'Series'/>
                <span> SERIES </span>
            </a>
           
            
        </NavMenu>

        <Login>Login</Login>
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
font-size: 40px;
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


    &:before{

        background-color rgb(249, 249, 249);
        boader-radius: 0px, 0px, 4px,4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scalex(0);
        transition: all 250ms cubic-bezier(0.25,  0.46, 0.45 0.94) 0s;
        visibility: hidden;
        width: auto;
    }
}



&:hover{
    span: before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
}

// @media (max-width: 768px){
//     display: none;
// }
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
align-items: center;
display: flex;
font-size:28px;
padding: 8px 16px; 
text-transform: uppercase;
Letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;

&: hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}

`;




export default Header;