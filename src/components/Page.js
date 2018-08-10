// @flow

import { View } from "./View";

export const Page = View.extend`
  height: 100%;
  width: 100%;

  @media screen {
    padding: 1em;
    max-width: 710px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }

  @media print {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = View.extend`
  @media print {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-between;
    height: 100%;
    width: 100%;
  }
`;
