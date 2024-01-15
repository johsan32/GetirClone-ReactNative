import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const completedTaskData = [{
  title: "Completed Tasks",
  data: [

    {
      id: "16",
      task: "Read next Article 7"
    },
    {
      id: "17",
      task: "Read next Article 8"
    },

  ]
}];
const SectionList = () => {
  const navigation = useNavigation();
 console.log("proitem", select);

    return (
      <View style={styles.container}>
        <SectionList
          sections={completedTaskData}
          renderItem={({item})=>(
              <Text style={styles.taskItem}>{item.name}</Text>
          )}
          renderSectionHeader={({section})=>(
            <Text style={styles.taskTitle}>{section.name}</Text>
          )}
          keyExtractor={item=>item.id}
          stickySectionHeadersEnabled
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eafffe'
    },
    taskItem:{
      padding: 10,
      marginVertical: 15,
      fontSize: 16
    },
    taskTitle:{
      backgroundColor: "#ffffff",
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
      elevation: 4,
      margin: 10,
      marginBottom: 0,
      borderRadius: 10
    }
  });
export default SectionList;


