import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {style} from '../Form/Form.style';

export default function MapList() {
  const [user, setUser] = useState([
    {id: 1, name: 'Aurora'},
    {id: 2, name: 'Blaze'},
    {id: 3, name: 'Clover'},
    {id: 4, name: 'Dynamo'},
    {id: 5, name: 'Echo'},
    {id: 6, name: 'Fable'},
    {id: 7, name: 'Gizmo'},
    {id: 8, name: 'Horizon'},
    {id: 9, name: 'Indigo'},
    {id: 10, name: 'Jasmine'},
    {id: 11, name: 'Karma'},
    {id: 12, name: 'Luna'},
    {id: 13, name: 'Maverick'},
    {id: 14, name: 'Nimbus'},
    {id: 15, name: 'Orchid'},
    {id: 16, name: 'Phoenix'},
    {id: 17, name: 'Quasar'},
    {id: 18, name: 'Raven'},
    {id: 19, name: 'Solstice'},
    {id: 20, name: 'Titan'},
    {id: 21, name: 'Umber'},
    {id: 22, name: 'Vortex'},
    {id: 23, name: 'Wanderer'},
    {id: 24, name: 'Xenon'},
    {id: 25, name: 'Yonder'},
  ]);

  return (
    <View>
      <ScrollView style={{marginBottom: 50}}>
        {user.map(item => (
          <Text style={style.text}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
