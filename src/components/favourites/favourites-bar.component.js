import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { FadeInView } from "../animations/fade.animation";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left" size="large">
        <Text variant="label">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <Spacer key={restaurant.name} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <FadeInView>
                  <CompactRestaurantInfo restaurant={restaurant} />
                </FadeInView>
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
