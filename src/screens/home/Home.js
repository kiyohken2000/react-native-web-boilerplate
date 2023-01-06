import React from "react";
import { View, Text } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import Button from '../../components/Button'
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";

export default function Home() {
  const navigate = useNavigate()

  const onButtonPress = () => {
    navigate('/detail')
  }

  return (
    <ScreenTemplate>
      <View>
        <Text>Home</Text>
        <Button
          label='Go Detail'
          onPress={onButtonPress}
          color={colors.lightPurple}
          desable={false}
          labelColor={colors.white}
        />
      </View>
    </ScreenTemplate>
  )
}