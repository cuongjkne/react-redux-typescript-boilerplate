import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  && {
    padding: 20px;
    box-shadow: 0 0 5px #0505056f;
    width: 300px;
    margin: 15px 0;
    border-radius: 10px;
    display: block;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const Title = styled.h4`
  && {
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;
