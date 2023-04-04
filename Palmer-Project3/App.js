import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';

export default class App extends Component {
    state = {
        results: '',
        listResults: [],
    };
    

    onLoad = async (grade) => {
        this.setState({ results: 'Loading, please wait...' });
        console.log(grade);
        const response = await
            fetch('https://2s4b8wlhik.execute-api.us-east-1.amazonaws.com/studentData?grade=' + grade, {
                method: 'GET',
            });
        const results = await response.text();
        const listResults = JSON.parse(results);
        console.log(listResults); // Check if listResults is an array
        this.setState({ listResults });
    }

    render() {
        const { results, listResults } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TextInput
                        style={styles.preview}
                        value={listResults.join('\n')}
                        placeholder="Results..."
                        editable={false}
                        multiline
                    />
                    <TouchableOpacity onPress={() => { this.onLoad("A") }} style={styles.btn}>
                        <Text>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.onLoad("B") }} style={styles.btn}>
                        <Text>B</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.onLoad("C") }} style={styles.btn}>
                        <Text>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.onLoad("D") }} style={styles.btn}>
                        <Text>D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.onLoad("E") }} style={styles.btn}>
                        <Text>E</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    preview: {
        backgroundColor: '#bdc3c7',
        width: 300,
        height: 400,
        padding: 10,
        borderRadius: 5,
        color: '#333',
        marginBottom: 50,
    },
    btn: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 3,
        marginTop: 10,
    },
});
