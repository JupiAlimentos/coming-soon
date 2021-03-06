import styled from 'styled-components'

export const HighlightsSpacer = styled.section`
  padding-top: 4.375rem;

  @media (min-width: 576px) {
    padding-top: 5rem;
  }

  @media (min-width: 768px) {
    padding-top: 5.25rem;
  }

  @media (min-width: 992px) {
    padding-top: 6.25rem;
  }

  @media (min-width: 1200px) {
    padding-top: 8.25rem;
  }
`

export const HighlightsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap !important;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 1rem;
  padding-bottom: 1.375rem;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    padding-bottom: 2rem;

    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 70%;
    }
  }

  @media (min-width: 992px) {
    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 47.5555555555%;
    }
  }

  @media (min-width: 1200px) {
    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 38.2222222222%;
    }
  }

  @media (min-width: 1400px) {
    & > [class^='col-'],
    & > [class*=' col-'] {
      width: 32.2222222222%;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--bdr-20);
    transition: all 1s ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`

export const Highlight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.25rem 1.625rem 2.6rem;
  text-align: center;
  border-radius: var(--bdr-12);
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  }

  & > [class^='ButtonWrapper'],
  & > [class*='_ButtonWrapper'] {
    margin-top: auto;
    align-self: center;
  }

  .gatsby-image-wrapper {
    margin: 0 18%;
    display: block;
    margin-bottom: 1rem;
  }

  @media (max-width: 1199.98px) {
    .gatsby-image-wrapper {
      margin: 0 20% 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .gatsby-image-wrapper {
      margin: 0 26% 1rem;
    }
  }

  @media (max-width: 767.98px) {
    .gatsby-image-wrapper {
      margin: 0 24% 1rem;
    }
  }

  @media (min-width: 576px) {
    border-radius: var(--bdr-16);
  }

  @media (min-width: 992px) {
    border-radius: var(--bdr-20);
  }
`

export const HighlightTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1rem;

  @media (max-width: 376px) {
    font-size: 1.75rem;
  }
`

export const HighlightWrapperInfo = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1.5rem;
`

export const HighlightInfo = styled.p`
  margin-bottom: 0;
`
