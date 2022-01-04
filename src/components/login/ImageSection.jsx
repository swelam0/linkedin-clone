import styled from "styled-components"
import GoogleBtn from "./GoogleBtn"

const ImageSection = (props) => {
  return (
    <Section>
      <Hero>
        <h1>Welcome to your professional comunity</h1>
        <GoogleBtn />
      </Hero>

      <IMG src="/images/login-hero.svg" alt="img" />
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  align-content: start;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    margin: auto;
    min-height: 0px;
  }
`
const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    padding-bottom: 0;
    width: 100%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 992px) {
      text-align: center;
      font-size: 20px;
      line-height: 2;
      margin-bottom: 30px;
    }
  }
`

const IMG = styled.img`
  width: 100%;
  max-width: 480px;

  @media (max-width: 992px) {
    max-width: 70%;
    margin: 40px auto;
  }
`

export default ImageSection
