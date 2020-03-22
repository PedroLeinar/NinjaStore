import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';
import { GiNinjaHeroicStance } from 'react-icons/gi';
import { GiSwapBag } from 'react-icons/gi';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <h1>NinjaStore</h1>
        <GiNinjaHeroicStance size={48} />
      </Link>
      <Cart to="cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <GiSwapBag size={36} />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
