import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';

class AutoCompleteContainer extends Component {
    static renderFilm(film) {
        const { name } = film;
        return (
            <View>
                <Text style={styles.titleText}>{name}</Text>
            </View>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            query: ''
        };
    }

    componentDidMount() {
        fetch('api').then(res => res.json()).then((json) => {
            this.setState({ films: json });
        });
    }

    findFilm(query) {
        if (query === '') {
            return [];
        }

        const { films } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return films.filter(film => film.name.search(regex) >= 0);
    }

    render() {
        const { query } = this.state;
        const films = this.findFilm(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <View style={styles.container}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={films.length === 1 && comp(query, films[0].name) ? [] : films}
                    defaultValue={query}
                    onChangeText={text => this.setState({ query: text })}
                    placeholder="Enter Star Wars film title"
                    renderItem={({ name }) => (
                        <TouchableOpacity onPress={() => this.setState({ query: name })}>
                            <Text style={styles.itemText}>
                                {name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.descriptionContainer}>
                    {films.length > 0 ? (
                        AutoCompleteContainer.renderFilm(films[0])
                    ) : (
                            <Text style={styles.infoText}>
                                Enter Title of a Star Wars movie
            </Text>
                        )}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 25
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    itemText: {
        fontSize: 15,
        margin: 2
    },
    descriptionContainer: {
        // `backgroundColor` needs to be set otherwise the
        // autocomplete input will disappear on text input.
        backgroundColor: '#F5FCFF',
        marginTop: 25
    },
    infoText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    directorText: {
        color: 'grey',
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center'
    },
    openingText: {
        textAlign: 'center'
    }
});


export default connect()(AutoCompleteContainer);