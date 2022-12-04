import styled from "styled-components";

const Login = (props) => {
    return (
    <Container>
        <Content> 
            <CTALogoOne src ="/Images/cta-logo-one.png" alt=""/> 
            <SignUp>GET ALL THERE </SignUp>
            <Description>“Expanding access to Disney+ to a broader audience at a lower price point is a win for everyone - consumers, advertisers, and our storytellers”</Description>
            <CTA/>
            <CTALogoTwo src = "/Images/cta-logo-two.png" alt= ""/>
            <BgImage/>
            
        </Content>
    </Container>
    )
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
hight: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vh;
width: 100%;
position: relatice;
min-height: 100vh;
box-sizing: boader-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100
`;

const BgImage = styled.div`

height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/Images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;


const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
`;

const CTALogoOne = styled.img`
margin-botto,: 12px;
max-width: 600px;
min-height:1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 600px;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
&:hover{
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0,0%, 95.3% 1);
max-width: 650px;
font-weight: bold;
font-size: 16px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1px;
`;

const CTALogoTwo = styled.img`
margin-botto,: 20px;
max-width: 700px;
min-height:1px;
display: inline-block;
width: 100%;
vertical-align: bottom;
`;


export default Login;