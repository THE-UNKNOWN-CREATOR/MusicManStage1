import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class NoteInfo extends React.Component{

    constructor(){

        super();

        this.state = {

            beat: "",

        }

    }

    render(){

        return(
            <View style={styles.ButtonsContainor}>

                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Text>full</Text>
                    </TouchableOpacity>
                </View>
                    
                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Text>half</Text>
                    </TouchableOpacity>
                </View>

                    
                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Text>quater</Text>
                    </TouchableOpacity>
                </View>

                    
                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Text>one-eighth</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

}


const styles = StyleSheet.create(
    {
        ButtonsContainor: {
            flexDirection: 'row', 
            justifyContent: "space-between",
        },

        ButtonContainor: {
            paddingRight: 30
        }
    }
)