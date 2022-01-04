import styled from "styled-components"
import GoogleBtn from "./GoogleBtn"

const ImageSection = (props) => {
  return (
    <Section>
      <Hero>
        <h1>Welcome to your professional comunity</h1>
        <img src="/images/login-hero.svg" alt="img" />
      </Hero>
      
      <GoogleBtn />
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 992px) {
    margin: auto;
    min-height: 0px;
  }
`
const Hero = styled.div`
  width: 100%;
  position: relative;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    flex-wrap: 200;
    line-height: 70px;

    @media (max-width: 992px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
      margin-bottom: 30px;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 992px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`

export default ImageSection
