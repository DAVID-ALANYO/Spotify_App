import { StyleSheet, Text, View ,Image,TouchableOpacity,Button} from 'react-native'
import React from 'react';
import { styles } from "../stylingSheet/mainStyle";
import { Modal,useState } from 'react-native';




export  function Four() {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => { setModalVisible(!isModalVisible)}

  return (
    <View style={{ flex: 1 }}>
    <Button title="Show modal" onPress={toggleModal} />

    <Modal isVisible={isModalVisible}>
      <View style={{ flex: 1 }}>
        <Text>Hello!</Text>

        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  </View>
  )
}
