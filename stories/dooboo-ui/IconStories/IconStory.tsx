import type {FC} from 'react';
import {Icon} from '../../../main/Icon';
import {View} from 'react-native';
import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.background};
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  padding: 8px;
`;

const IconStory: FC = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../../main/Icon/doobooui.ttf'),
  });

  if (!fontsLoaded) return <View />;

  return (
    <ScrollContainer
      contentContainerStyle={{
        flex: 1,
        alignSelf: 'stretch',
      }}>
      <Container style={{paddingVertical: 60}}>
        <StyledIcon size={16} name="moment-solid" />
        <StyledIcon size={16} name="moment-light" />
        <StyledIcon size={16} name="cross-light" />
        <StyledIcon size={16} name="tile-light" />
        <StyledIcon size={16} name="list-light" />
        <StyledIcon size={16} name="setting-light" />
        <StyledIcon size={16} name="tick-light" />
        <StyledIcon size={16} name="chevron-right" />
        <StyledIcon size={16} name="chevron-down-light" />
        <StyledIcon size={16} name="chevron-up-light" />
        <StyledIcon size={16} name="chevron-left-light" />
        <StyledIcon size={16} name="share-solid" />
        <StyledIcon size={16} name="add-solid" />
        <StyledIcon size={16} name="like-solid" />
        <StyledIcon size={16} name="discover-solid" />
        <StyledIcon size={16} name="account-solid" />
        <StyledIcon size={16} name="collection-solid" />
        <StyledIcon size={16} name="search-solid" />
        <StyledIcon size={16} name="share-light" />
        <StyledIcon size={16} name="add-light" />
        <StyledIcon size={16} name="like-light" />
        <StyledIcon size={16} name="discover-light" />
        <StyledIcon size={16} name="collection-light" />
        <StyledIcon size={16} name="search-light" />
      </Container>
    </ScrollContainer>
  );
};

export default IconStory;
