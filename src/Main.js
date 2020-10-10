import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const Main = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBox}>
                <View style={styles.subTopBox}>
                    <View style={styles.orange}>
                        <Text>Orange Circle</Text>
                    </View>
                    <View style={styles.yellow}>
                        <Text style={{alignSelf:'center'}}>Yellow Box</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.bottomBox}>
            <View style={styles.subBottomBox}>
                    <View style={styles.dark}>
                        <Text style={styles.darkBoxText}>Black Box</Text>
                    </View>
                    <View style={styles.brown}>
                        <Text style={[styles.textVert, {transform: [{ rotateZ: "270deg" },]}]}>Brown{"\n"}Box</Text>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Main;

const styles = StyleSheet.create({
    container:{backgroundColor:'white', flex:1},
    topBox:{backgroundColor:'#ef233c', flex:1.5, marginTop:10, marginHorizontal:10},
    subTopBox:{backgroundColor:'#9cafb7', flex:1, flexDirection:'row', margin:20, borderRadius:10, alignItems:'center', justifyContent:'center'},
    orange:{backgroundColor:'#ff9f1c', margin:40, borderRadius:90, width:90, height:90, justifyContent:'center' },
    yellow:{backgroundColor:'#ffe66d', borderRadius:15, margin:40, width: 100, height:40, justifyContent:'center' },
    bottomBox:{backgroundColor:'#f4acb7', flex:3, marginHorizontal:10},
    subBottomBox:{flex:1, flexDirection:'row', margin:10, borderRadius:10, alignItems:'center', justifyContent:'center'},
    dark:{backgroundColor:'#22223b',margin:30, borderRadius:20, width:200, height:450, justifyContent:'center'},
    darkBoxText:{alignSelf:'center', color:'white',},
    brown:{backgroundColor:'#774936', borderRadius:40, margin:20, width: 70, height:450, justifyContent:'center',},
    textVert:{alignSelf:'center', color:'white',},
    

})
