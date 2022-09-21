import styled from "styled-components";


export default function TextSection() {
  return (
    <Wrapper>
      <Title>Aloha! Kaushik Here</Title>
      <Description>
        Welcome to my digital world. I am a frontend developer and a tech enthusiast. I love to build things and solve problems. I am currently working as a software developer at <a href="https://www.anchanto.com/" target="_blank" rel="noopener noreferrer"><span className='bg-blue-600'>Anchanto</span></a>.
        <br/>

        <div className="px-5">Try to rotate the cube!👇</div>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: silver;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: aliceblue;
  font-style: italic;
  font-weight: bold;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
