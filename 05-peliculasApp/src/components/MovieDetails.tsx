
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import currrencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem'
import { HorizontalSlider } from './HorizontalSlider';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />

                    <Text style={{ marginLeft: 5 }}>{movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>
                    <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>
                    <Text style={{ fontSize: 16 }}>{currrencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
                </View>

                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Actores</Text>

                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, height: 70 }}
                    />
                </View>
            </View>
        </>
    )
}
