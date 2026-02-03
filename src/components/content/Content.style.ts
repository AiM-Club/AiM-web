import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  padding: 1.5rem;
  min-height: 26rem;
  font: var(--body-r-xl);
  
  @media (max-width: 560px){
    padding: 0.75rem;
    font: var(--body-r-m);
    min-height: 12.5rem;
  }
`;

export const ContentText = styled.div`
  word-break: break-word;
  width: 100%;
  
  p {
    margin: 0.5rem 0;
    line-height: 1.6;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  b, strong {
    font-weight: bold;
  }
  
  em, i {
    font-style: italic;
  }
  
  u {
    text-decoration: underline;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0 0.5rem 0;
    font-weight: bold;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  ul, ol {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin: 0.25rem 0;
  }
  
  blockquote {
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 3px solid var(--primary-green);
    font-style: italic;
  }
  
  a {
    color: var(--primary-green);
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
`;
