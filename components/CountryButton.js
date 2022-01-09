import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

export const CountryButton = ({
  item,
  itemStyle,
  hideCallingCode,
  showSelected,
  selectedItems,
  selectedImage,
  name,
  ...rest
}) => (
  <TouchableOpacity style={styles.countryButton} {...rest}>
    <Text style={{flex: 0.2}}>{item?.flag}</Text>
    {hideCallingCode ? null : (
      <Text style={[{flex: 0.3}, itemStyle]}>{item?.dial_code}</Text>
    )}
    <Text style={[{flex: 1}, itemStyle]}>{name}</Text>
    {showSelected ? (
      <View style={{flex: 0.2}}>
        {selectedItems &&
        selectedItems.length &&
        selectedItems.includes(name) ? (
          <Image style={styles.selectImage} source={selectedImage} />
        ) : null}
      </View>
    ) : null}
  </TouchableOpacity>
);

const styles = {
  countryButton: {
    borderBottom: 3,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: 50,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginVertical: 2,
    flexDirection: 'row',
    borderRadius: 10,
  },
  selectImage: {
    height: 16,
    width: 16,
  },
};
