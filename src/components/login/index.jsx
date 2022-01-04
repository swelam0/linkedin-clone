import styled from "styled-components"
import ImageSection from "./ImageSection"

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="logo" />
        </a>

        <div className="">
          <Join>join</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>

      <ImageSection />
    </Container>
  )
}

const Container = styled.div`
  padding: 0px;
`

const Nav = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 992px) {
      padding: 0 5px;
    }
  }
`

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 5px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-delay: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a662c;
    text-decoration: none;
  }
`
export default Login
