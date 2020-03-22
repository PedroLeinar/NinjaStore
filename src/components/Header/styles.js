import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  h1 {
    margin-right: 10px;
  }

  a {
    color: #2e9afe;
    text-decoration: none;
    align-items: center;
    display: flex;
    align-items: baseline;

    &:hover {
      color: ${darken(0.1, '#2e9afe')};
    }
  }
`;

export const Cart = styled(Link)`
  align-items: center;
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;
    font-weight: bold;
  }

  strong {
    display: block;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;
