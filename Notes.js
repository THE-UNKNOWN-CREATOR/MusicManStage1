import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Note from './Note';

export default class Notes extends React.Component{

    constructor(){
        super();

        this.state = {
            notes: [
                {noteval: "A", noteLenght: "quater"},
                {noteval: "B", noteLenght: "quater"},
                {noteval: "C", noteLenght: "quater"},
                {noteval: "D", noteLenght: "quater"},
                {noteval: "E", noteLenght: "quater"},
                {noteval: "F", noteLenght: "quater"},
                {noteval: "G", noteLenght: "quater"},
                {noteval: "A", noteLenght: "quater"},
                {noteval: "B", noteLenght: "quater"},
                {noteval: "C", noteLenght: "quater"},
                {noteval: "D", noteLenght: "quater"},
                {noteval: "E", noteLenght: "quater"},
            ]
        }
    }

    render(){
        return(
            <View style={style.rowContainor}>
                {
                    this.state.notes.map( (index) => {
                        return (
                            <View style={style.columnContainor}>
                               {
                                    this.state.notes.map( (item, index) => {
                                        return (
                                            <View>
                                                <Note noteval= {this.state.notes[index].noteval} noteLenght={this.state.notes[index].noteLenght} />
                                            </View>
                                        )
                                    } )
                                } 
                            </View>
                        )
                    } )
                } 
            </View>
        )
    }
}

const style = StyleSheet.create({
    rowContainor: {flexDirection: "row", flex: 0.1},
    columnContainor: {flexDirection: "column", flex: 0.1}
})