import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // TODO: Fetch contacts from device
    setContacts([
      { name: 'John Doe', phone: '+15555555555' },
      { name: 'Jane Doe', phone: '+15555555556' },
      { name: 'Peter Parker', phone: '+15555555557'},
      { name: 'Peter Parker', phone: '+15555555557' },
      { name: 'Peter Parker', phone: '+15555555557' },
      { name: 'Peter Parker', phone: '+15555555557' },

    ]);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
  },
});

export default ContactList;