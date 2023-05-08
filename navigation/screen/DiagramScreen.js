import * as React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

const image = require('../../assets/machine.png');   

const DiagramScreen = () => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textTime}>Thời gian cập nhật: 20:20 ngày 8/5/2023</Text>
        </View>
        <ImageBackground source={image} resizeMode="center" style={styles.image}>
          <View style={styles.containerImage}>
            <View style={styles.containerLeft}>
              {/* VN1 */}
              <Text style={styles.status_vn1}>
                <Text>   VN1</Text>
                <Image source={require('../../assets/on.png')} style={styles.icon} />
              </Text>

              {/* Bơm đầu vào */}
              <Text style={styles.status_b1}>
                <Text>Bơm đầu vào</Text>
                <Image source={require('../../assets/on.png')} style={styles.icon} />
              </Text>
            </View>
            <View style={styles.containerCenter}>

              {/* Báo cạn 1 */}
              <Text style={styles.status_bc1}>
              <Text>Báo cạn 1</Text>
                <Image source={require('../../assets/off.png')} style={styles.icon} />
              </Text>
            </View>
            <View style={styles.containerRight}>

              {/* VN3 */}
              <Text style={styles.status_vn3}>
                <Text>   VN3</Text>
                <Image source={require('../../assets/off.png')} style={styles.icon} />
              </Text>

              {/* Bơm b2 */}
              <Text style={styles.status_b2}>
                <Text>Bơm Venturi</Text>
                <Image source={require('../../assets/off.png')} style={styles.icon} />
              </Text>

              {/* Bơm VN2 */}
              <Text style={styles.status_vn2}>
                <Text>   VN2</Text>
                <Image source={require('../../assets/on.png')} style={styles.icon} />
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.note}>
          <View style={styles.noteOnOff}>
            <Image source={require('../../assets/on.png')} style={styles.icon} />
            <Text>: Đang bật</Text>
          </View>
          <View style={styles.noteOnOff}>
            <Image source={require('../../assets/off.png')} style={styles.icon} />
            <Text>: Đang tắt</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => { alert('Dữ liệu đã được cập nhật')}}>
          <View style={styles.buttonUpdate}>
            <Text style={{ color: 'white' }}>Cập nhật dữ liệu</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      marginBottom: 0
    },
    icon: {
      height: 15,
      width: 40
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    textTime: {
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 70,
      marginTop: 20
    },
    textNameItem: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    containerImage: {
      flex: 1,
      flexDirection: 'row'
    },
    containerLeft: {
      flex: 1
    },
    containerCenter: {
      flex: 1
    },
    containerRight: {
      flex: 1
    },
    status_vn1: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 270,
      marginLeft: 70,
      width: 40,
      height: 50
    },
    status_b1: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 120,
      marginLeft: 47,
      width: 100,
      height: 50
    },
    status_bc1: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 70,
      width: 80,
      height: 50
    },
    status_vn3: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 180,
      marginLeft: 20,
      width: 40,
      height: 50
    },
    status_b2: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 140,
      marginLeft: 25,
      width: 40,
      height: 50
    },
    status_vn2: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 40,
      marginLeft: 50,
      width: 40,
      height: 50
    },

    note: {
      marginBottom: 40,
      marginLeft: 85,
      flexDirection: 'row'
    },
    noteOnOff: {
      marginTop: 10,
      marginLeft: 20,
      flexDirection: 'row'
    },
    buttonUpdate: {
      backgroundColor: '#000080',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 15,
      width: 200,
      height: 50,
      marginLeft: 110,
      marginBottom: 20
    }
});

export default DiagramScreen;