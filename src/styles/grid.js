import { css } from 'styled-components'

export const grid = css`
  .container {
    width: 100%;
    padding-right: var(--gd-gutter-x, 1.25rem);
    padding-left: var(--gd-gutter-x, 1.25rem);
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1440px) {
      max-width: 1426px;
    }
  }

  .row {
    --gd-gutter-x: 2.5rem;
    --gd-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--gd-gutter-y) * -1);
    margin-right: calc(var(--gd-gutter-x) / -2);
    margin-left: calc(var(--gd-gutter-x) / -2);

    & > * {
      box-sizing: border-box;
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--gd-gutter-x) / 2);
      padding-left: calc(var(--gd-gutter-x) / 2);
      margin-top: var(--gd-gutter-y);
    }
  }

  .d-sm-flex {
    display: flex !important;
  }

  .g-0,
  .gx-0 {
    --gd-gutter-x: 0;
  }

  .g-0,
  .gy-0 {
    --gd-gutter-y: 0;
  }

  .g-1,
  .gx-1 {
    --gd-gutter-x: 1rem;
  }

  .g-1,
  .gy-1 {
    --gd-gutter-y: 1rem;
  }

  .g-2,
  .gx-2 {
    --gd-gutter-x: 1rem;
  }

  .g-2,
  .gy-2 {
    --gd-gutter-y: 1rem;
  }

  .g-3,
  .gx-3 {
    --gd-gutter-x: 1.5rem;
  }

  .g-3,
  .gy-3 {
    --gd-gutter-y: 1.5rem;
  }

  .g-4,
  .gx-4 {
    --gd-gutter-x: 2.5rem;
  }

  .g-4,
  .gy-4 {
    --gd-gutter-y: 2.5rem;
  }

  .g-5,
  .gx-5 {
    --gd-gutter-x: 3rem;
  }

  .g-5,
  .gy-5 {
    --gd-gutter-y: 3rem;
  }

  .col {
    flex: 1 0 0%;
  }

  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%;
    }

    .row-cols-sm-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-sm-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-sm-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-sm-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-sm-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-sm-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-sm-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }

    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%;
    }

    .row-cols-lg-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-lg-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-lg-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-lg-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-lg-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%;
    }

    .row-cols-xl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-xl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%;
    }

    .row-cols-xxl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-xxl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-xxl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-xxl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-xxl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-xxl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-xxl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.3333333333%;
    }

    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.6666666667%;
    }

    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.3333333333%;
    }

    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.6666666667%;
    }

    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.3333333333%;
    }

    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.6666666667%;
    }

    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
`

export default grid
