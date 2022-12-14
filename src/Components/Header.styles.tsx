import tw from "twin.macro";
import styled from "@emotion/styled";

type Picture = {
  src: string;
};

type HeaderContainer = {
  dark: boolean;
};

type SearchInput = {
  active: boolean;
};
export const HeaderContainer = styled.div<HeaderContainer>`
  ${tw`
    flex
    justify-between
    p-4
    fixed
    top-0
    w-full
    transition-all
    z-10
  `}
  ${(props) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}
  img {
    ${tw`
      h-8
    `}
  }
`;
export const SearchInput = styled.input<SearchInput>`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width: 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? "10px" : "0")};
    padding: ${({ active }) => (active === true ? "0 10px" : "0")};
    opacity: ${({ active }) => (active === true ? "1" : "0")};
    width: ${({ active }) => (active === true ? "200px" : "0px")};
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding-top: 20px;
  background-size: contain;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Search = styled.div`
  dsiplay: flex;
  align-items: center;

  svg {
    color: #111;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Picture = styled.button<Picture>`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;
