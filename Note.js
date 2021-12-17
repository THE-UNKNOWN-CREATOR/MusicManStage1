import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Note extends React.Component{

    constructor(){
        super();

        this.state = {
            noteval: "",
            noteLenght: "",
            isHilighted: false
        }
    }

    componentDidMount(){
        this.setState({noteval: this.props.noteval, noteLenght: this.props.noteLenght})
    }

    render(){
        return(
            <View>
                <TouchableOpacity style={[styles.notes, {backgroundColor: !this.state.isHilighted ? "#ff50ff" : "rgba(255, 80, 255, 0.3)"} ]} onPress={ () => { this.hilight(); }}>
                    <Text style={this.state.text}>{this.state.noteval}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    hilight(){
        if(!this.state.isHilighted){
            this.setState({isHilighted: true});
            return;
        }
        
        if(this.state.isHilighted){
            this.setState({isHilighted: false});
            return;
        }
    }

}

const styles = StyleSheet.create({

    notes: {
        padding: 2,
        paddingBottom: 1,
        borderWidth: 2,
        borderColor: "#f500f5",
        justifyContent: "center"
    },

    text: {
        opacity: 0.3,
        color: "#f500f5",
        textAlign: 'center'
    }

})