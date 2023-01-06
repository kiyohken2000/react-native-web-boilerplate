import React from "react";
import { View, Text } from "react-native";
import ScreenTemplate from '../../components/ScreenTemplate'
import Button from '../../components/Button'
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";

export default function Detail() {
  const navigate = useNavigate()

  const onGoBack = () => {
    navigate(-1)
  }
  return (
    <ScreenTemplate>
      <View>
        <Text>Home</Text>
        <Button
          label='Go Back'
          onPress={onGoBack}
          color={colors.deeppink}
          desable={false}
          labelColor={colors.white}
        />
      </View>
    </ScreenTemplate>
  )
}