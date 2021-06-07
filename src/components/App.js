import styled from "styled-components"
import bgImg from "../assets/Frame_1.png"
import Main from "./mainpage/Main"

const App = () => {
    return (
       <Container>
        <Wrapper>
        <Main/>
        </Wrapper> 
        </Container>
    );
};

const Container = styled.div `
  backgroud: #EEFCFF;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div `
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
`;
export default App