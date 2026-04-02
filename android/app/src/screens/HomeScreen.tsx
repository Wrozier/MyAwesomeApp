import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";


type RootStackParamList = {
  Details: { count: number };
};

const HomeScreen = (props: any) => {
  const [count, setCount] = useState<number>(100);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const goToDetails = () => {
    navigation.navigate("Details", { count });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Count: {count}</Text>

      <Button title="Increase" onPress={handleIncrement} />

      <Button title="Go to Details" onPress={goToDetails} />
    </View>
  );
};

export default HomeScreen;