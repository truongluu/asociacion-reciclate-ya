import React from "react";
import { connect } from "frontity";
import { styled, css } from "frontity";

import Link from "./Link";
import waveImage from "../../assets/images/background-wave.svg";
import menuIcon from "../../assets/images/menu-icon.png";
import menuIconClose from "../../assets/images/menu-icon-close.png";

const Header = ({ state, actions }) => {
  const Menu = styled.div`
    display: none;
    button {
      background: none;
      border: none;
    }

    ul {
    }

    li {
      width: 100%;
      text-align: center;
      padding: 5px 0;
      background: #ffec45;
      list-style-type: none;
      margin: 15px 0;
      transform: rotate(1deg);
      font-size: 22px;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      display: block;
    }
  `;

  const Navigation = styled.nav`
    text-align: center;
    display: flex;

    a {
      font-family: "Barlow";
      font-weight: 600;
      padding-right: 20px;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      display: none;
    }
  `;

  return (
    <header
      css={css`
    background-color:${
      state.router.link === "/" ? state.theme.colors.softYellow : "transparent"
    };
      background-image: url("${waveImage}");
      padding: 40px 20px;
      background-size: 1400px 120px;
      background-repeat: no-repeat;
      background-position: top;
      min-height:50px;
      `}
    >
      <Menu>
        {state.theme.isMenuOpen ? (
          <>
            <button onClick={actions.theme.closeMenu}>
              <img
                src={menuIconClose}
                css={css`
                  width: 25px;
                  height: 25px;
                `}
              />
            </button>
            <ul
              css={css`
                padding: 0;
              `}
            >
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/la-asociacion">La asociación</Link>
              </li>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
              <li>
                <Link href="/nuestros-amigos/">Nuestros amigos</Link>
              </li>
            </ul>
          </>
        ) : (
          <button
            onClick={actions.theme.openMenu}
            css={css`
              background: none;
              border: none;
            `}
          >
            {" "}
            <img
              src={menuIcon}
              css={css`
                width: 25px;
                height: 25px;
              `}
            />
          </button>
        )}
      </Menu>

      <Navigation
        css={css`
          margin: auto;
          width: ${state.theme.screenSizes.container};
          /* Tablet */
          @media screen and (min-width: ${state.theme.screenSizes
              .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
            width: auto;
          }

          /* Mobile */
          @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
            width: auto;
          }
        `}
      >
        <Link href="/">Inicio</Link>
        <Link href="/la-asociacion">La asociación</Link>
        <Link href="/blog/">Blog</Link>
        <Link href="/nuestros-amigos/">Nuestros amigos</Link>
      </Navigation>
    </header>
  );
};

export default connect(Header);
