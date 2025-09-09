import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Button } from 'react-native';
import { supabase } from '../lib/supabaseClient';
import { Category } from '../types/models';
import { useNavigation } from '@react-navigation/native';
import { useGameStore } from '../state/gameStore';

const CategoryPicker: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const selected = useGameStore((s) => s.selectedCategories);
  const setSelected = useGameStore((s) => s.setSelectedCategories);
  const navigation = useNavigation();

  useEffect(() => {
    supabase
      .from<Category>('categories')
      .select('*')
      .eq('is_active', true)
      .then(({ data }) => setCategories(data || []));
  }, []);

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((c) => c !== id));
    } else if (selected.length < 6) {
      setSelected([...selected, id]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSel = selected.includes(item.id);
          return (
            <Pressable
              onPress={() => toggle(item.id)}
              style={[styles.item, isSel && styles.selected]}
            >
              <Text style={styles.text}>{item.name_ar}</Text>
            </Pressable>
          );
        }}
      />
      <Button
        title="التالي"
        onPress={() => navigation.navigate('TeamSetup' as never)}
        disabled={selected.length !== 6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    flex: 1,
    margin: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: '#c8e6c9'
  },
  text: { fontSize: 18 }
});

export default CategoryPicker;
