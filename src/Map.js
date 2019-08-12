import React, {Fragment} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
const Map = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});
export default Map;