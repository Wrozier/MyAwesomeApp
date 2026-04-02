import { useEffect, useState, useMemo, useCallback } from 'react';
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

const DetailsScreen = (props: any) => {
  const [count, setCount] = useState<number>(10);
  const [value, setValue] = useState<string>('1');

  // ✅ Memoized data (prevents new array reference on every render)
  const consultants = useMemo(
    () => ['Alice', 'Bob', 'Charlie', 'David'],
    []
  );

  useEffect(() => {
    Alert.alert('Mounting');

    return () => {
      Alert.alert('Unmounting');
    };
  }, []);

  const { firstName, LastName } = props.route.params;

  // ✅ Memoized renderItem (important for FlatList performance)
  const renderItem = useCallback(({ item }: { item: string }) => {
    return (
      <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
        {item}
      </Text>
    );
  }, []);

  // ❌ NOT memoized (explained below)
  const keyExtractor = (item: string, index: number) => index.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen:</Text>

      <Text style={styles.text}>FirstName: {firstName}</Text>
      <Text style={styles.text}>LastName: {LastName}</Text>

      {/* ❌ map NOT memoized */}
      {consultants.map((consultant, index) => (
        <Text key={index} style={{ fontWeight: 'bold', fontSize: 14 }}>
          {consultant}
        </Text>
      ))}

      <FlatList
        data={consultants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default DetailsScreen;