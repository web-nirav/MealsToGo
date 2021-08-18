import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import styled from "styled-components";

const RestaurantContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  /* we had to write in conditional because StatusBar.currentHeight is only for android so for ios it will be null based on which gives error */
`;

const RestaurantSearch = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <RestaurantContainer>
      <RestaurantSearch>
        <Searchbar placeholder="Search" />
      </RestaurantSearch>
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </RestaurantContainer>
  );
};
