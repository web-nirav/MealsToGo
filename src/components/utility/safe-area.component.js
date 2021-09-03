import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  /* we had to write in conditional because StatusBar.currentHeight is only for android so for ios it will be null based on which gives error */
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
