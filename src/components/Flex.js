// @flow

import { View } from "./View";

type Props = {
  col: boolean,
  justify: string,
  align: string
};

export const Flex = View.extend`
    display: flex;
    ${(props: Props) => props.col && "flex-direction: column;"}
    ${(props: Props) => props.justify && `justify-content: ${props.justify};`}
    ${(props: Props) => props.align && `align-items: ${props.align};`}
`;
