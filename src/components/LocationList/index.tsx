import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LocationData } from '../..//types';
import { lightColors } from '../../constants/Colors';
import { ThemedText } from '../ThemedText';
import styles from './style';
interface LocationsListProps {
  locations: LocationData[];
  handleLocation: (location: LocationData) => void;
}

const LocationsList: React.FC<LocationsListProps> = ({
  locations,
  handleLocation,
}) => {
  return (
    <View
    style={styles.container}>
      {locations.map((loc, index) => {
      
        return (
          <TouchableOpacity
            onPress={() => handleLocation(loc)}
            key={index}
            style={styles.list}>
            <FontAwesome name="map-marker" size={20} color={'black'} />
                    <ThemedText color={lightColors.text}  type="defaultSemiBold" >  {loc?.name}</ThemedText>
                    <ThemedText color={lightColors.text}  type="defaultSemiBold" >, {loc?.country}</ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LocationsList;
