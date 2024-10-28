import { SectionList, Text, View, StyleSheet } from 'react-native';
import React from 'react';

export default function MySectionList() {
    const DATA = [
        {
            title: 'Fruits',
            id:1,
            data: ['Apple', 'Banana', 'Orange'],
        },
        {
            title: 'Vegetables',
            id:2,
            data: ['Carrot', 'Tomato', 'Cucumber'],
        },
        
    ];

    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index.toString()}  // Combine item and index as key
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}

                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item}</Text>
                    </View>
                )}
                

                renderSectionFooter={({ section }) => (
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>End of {section.title} Section</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', 
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#f1f1f1', 
        padding: 5,
    },
    footer: {
        padding: 10,
        backgroundColor: '#e0e0e0', // Background color for footer
    },
    footerText: {
        fontStyle: 'italic',
        color: '#666',
    },
});