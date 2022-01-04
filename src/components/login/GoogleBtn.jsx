import styled from "styled-components"

const GoogleBtn = () => {
  return (
    <Form>
      <Google>
        <img src="/images/google.svg" alt="google" />
        Sign in with google
      </Google>
    </Form>
  )
}

const Form = styled.div`
  margin-top: 100px;
  width: 100%;

  @media (max-width: 992px) {
    margin-top: 20px;
  }
`

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  max-width: 360px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%),
    inset 0 0 0 2px rgba(0 0 0 / 0%), inset 0 0 0 1px rgba(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  outline: none;
  border: 0;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

  @media(max-width: 992px){
    margin: auto;
  }
`

export default GoogleBtn
