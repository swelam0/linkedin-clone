import styled from "styled-components"

const Search = () => {
  return (
    <Container>
      <div className="">
        <input type="text" placeholder="Search" />
      </div>

      <SearchIcon>
        <img src="/images/search-icon.svg" alt="search" />
      </SearchIcon>
    </Container>
  )
}

const Container = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 3px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`

export default Search
