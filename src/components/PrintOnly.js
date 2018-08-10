// @flow

import { View } from "./View";

export const PrintOnly = View.extend`
  @media not print {
    display: none;
  }
`;
