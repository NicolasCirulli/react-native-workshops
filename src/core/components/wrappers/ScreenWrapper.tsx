import { View, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  mt?: boolean; // Agrego una prop que no pertenece a las de ViewProps
}

export default function ScreenWrapper({
  mt = false, // La prop es opcional y por defecto la dejo en false
  className,
  style,
  ...rest
}: Props) {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={[{ marginTop: mt ? inset.top : 0 }, style]}
      className={"flex-1 " + className}
      {...rest}
    />
  );
}
