import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  SearchIcon,
  Search,
  Picture,
  SearchInput,
} from "./Header.styles";

function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setIsDark(true);
        } else setIsDark(false);
      });
    };
  }, []);

  return (
    <HeaderContainer dark={isDark}>
      <Picture src={`/images/users/1.png`} />
      <Search>
        <SearchIcon
          onClick={() => setSearchActive((searchActive) => !searchActive)}
        >
          <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(target.value)
          }
          placeholder="Search films and series"
          active={searchActive}
        />
      </Search>
    </HeaderContainer>
  );
}

export default Header;
