import styled, { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla|Lato');

  :root {
    --primary-navy: #0c2340;
    --primary-gold: #DEAA00;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-family: lato;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    over-flow: hidden;
  }

  body {
    margin: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 64px;

    h1,h2,h3,h4,h5,h6 {
    font-family: Karla;
    color: #0c2340;
    }

    a {
      color: #2A5DB0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : 'initial')};
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};

  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  }
`
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => (props.width ? props.width : 'auto')};
`

export const HeroImage = styled.div`
  height: auto;
  background: url(${props => props.image}) no-repeat left scroll;
  background-size: cover;
  padding: 6rem 0rem;
  color: white;
  .title {
    color: #fff;
    font-size: 4rem;
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    .title {
      font-size: 2.5rem;
    }
  }
`
