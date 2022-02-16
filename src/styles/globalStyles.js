import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
 background-repeat: no-repeat;
    background-position: 0px 0px;
    background-attachment: fixed;
    background-color: #fff;
    -webkit-background-size: calc(100vw) calc(100vh);
    -moz-background-size: calc(100vw) calc(100vh);
    -o-background-size: calc(100vw) calc(100vh);
    background-size: calc(100vw) calc(100vh);
    
height:850px;
  display: block;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 10px;
  width: 10px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 40px;
  width: 40px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 40px;
  width: 40px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
    max-width: 100%;
    height:auto;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
   display: -webkit-flex; /* old versions of Chrome/Safari/Opera */
  display: -ms-flexbox; /* IE10 */

  flex-wrap: wrap;
  -webkit-flex-wrap: wrap; /* old versions of Chrome/Safari/Opera */
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 100;
  line-height: 1.2;
  position: center;

`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
  position: center;

`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
  position: center;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
