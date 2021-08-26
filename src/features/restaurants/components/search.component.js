import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const RestaurantSearch = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <RestaurantSearch>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </RestaurantSearch>
  );
};
