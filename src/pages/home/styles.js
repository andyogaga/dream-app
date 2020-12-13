import styled, { keyframes } from "styled-components";
import { PRI_COLOR, breakpoints, PRI_COLOR_FADED } from "../../utils/constants";

export const slideFadeInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const slideInUp = keyframes`
from {
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  margin: auto;

  @media screen and ${breakpoints.sm} {
    width: 90%;
  }
  @media screen and ${breakpoints.md} {\
    width: 90%;
  }

 .jumbo {
    width: 100%;
    justify-content: center;
    align-items: center;

    p {
      font-weight: bold;
      font-size: 5rem;
      text-align: center;
      text-shadow: 0px 0px 4px #333;
      margin: 2rem;
    }

    @media screen and ${breakpoints.sm} {
      p {
         font-size: 2.2rem;
      }
     
    }
  }
`;

export const AddDreamSection = styled.div`
  width: 100%;
  padding-bottom: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and ${breakpoints.sm} {
    padding-bottom: 8vh;
  }

  @media screen and ${breakpoints.md} {
    padding-bottom: 10vh;
  }
`;

export const AddDreamWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideInUp} 1.2s ease-in;

  .multiline {
    height: 8rem;
  }

  label {
    font-size: 1rem;
    align-self: flex-start;
    margin-left: 1rem;
  }

  div {
    width: 60%;
    @media screen and ${breakpoints.md} {
      width: 100%;
    }
  }

  @media screen and ${breakpoints.md} {
    align-self: center;
    margin-left: 0rem;
    margin: 2rem;
  }
`;

export const SearchButton = styled.button`
  width: 15%;
  height: 4rem;
  cursor: pointer;
  border-radius: 2rem;
  border: 1px solid ${PRI_COLOR};
  color: #fff;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0.5rem;
  background-color: ${PRI_COLOR};

  @media screen and ${breakpoints.sm} {
    width: 40%;
    height: 3rem;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
    font-size: 1rem;
  }
  @media screen and ${breakpoints.md} {
    width: 40%;
    height: 3rem;
    align-self: center;
    margin-top: 0.5rem;
    border-radius: 2rem;
    font-size: 1rem;
  }
`;

export const DreamsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 724px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const DreamCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2rem;
  height: 18rem;
  width: 18%;
  margin: 0.8rem;
  min-width: 12rem;
  box-shadow: 0 0 0.8rem 0.15rem ${PRI_COLOR_FADED};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  animation: ${slideInUp} 1.2s linear;

  &:hover {
    box-shadow: 0 0 0.5rem 0.4rem ${PRI_COLOR_FADED};
  }

  @media screen and ${breakpoints.sm} {
    width: 100%;
    align-self: center;
  }
`;

export const DreamsText = styled.p`
  text-align: center;
  color: ${PRI_COLOR};
  font-size: 1.3rem;
  margin-block-start: 0rem;

  &:first-letter {
    color: #000;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CaptionCardHeader = styled(DreamsText)`
  margin-block-end: 0rem;
  color: rgba(0, 0, 0, 0.9);
  &:first-letter {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: normal;
  }
`;

export const PrimeText = styled.p`
  color: ${PRI_COLOR};
  margin: auto;
`;

export const EmptyContentText = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  color: ${PRI_COLOR_FADED};
  text-align: center;
`;
