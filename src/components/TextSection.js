import styled from "styled-components";


export default function TextSection() {
  return (
    <Wrapper>
      <Title>Aloha! Kaushik Here</Title>
      <Description>
        <h1>Welcome to my personal portfolio site.</h1>
        <br/>
         <h2>I am a frontend developer and a tech enthusiast, with working knowledge of Angular, React, Next.js, Three.js among others.</h2>
         <div className="next-text">
          <h4>I love to see ideas come to life and build new things.</h4>
          <h3>I am currently working as a software developer at <a href="https://www.anchanto.com/" target="_blank" rel="noopener noreferrer"><span className='bg-blue-600'>Anchanto</span></a>.</h3>
         </div>
        <br/>

        <div className="px-5">In case you haven't tried it out yet, give the cube a nice little spin to get started with!💥
        <br/>
        <div>
          <h3>Check out the other sections above too</h3>
        </div>
        </div>
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
  position: absolute;
  top: 300px;
  left:600px
`;

const Title = styled.h1`
  color: silver;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  background-color: #000000;
`;

const Description = styled.p`
  max-width: 240px;
  color: aliceblue;
  font-style: italic;
  font-weight: bold;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
  z-index: 1;
`;
