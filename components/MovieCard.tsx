import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({id, poster_path, title, vote_average, release_date, original_language}: Movie) => {
    return (
        <Link
            href={`/movies/${id}`} asChild
        >
            <TouchableOpacity
                className="w-[30%]"
            >
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />

                <Text
                    className="text-sm font-bold text-white mt-2"
                    numberOfLines={1}
                >
                    [{original_language.toUpperCase()}] {title}
                </Text>

                <View
                    className="flex-row items-center jusitfy-start gap-x-1"
                >
                    <Image source={icons.star}
                           className="size-4"
                    />
                    <Text
                        className="text-xs font-bold uppercase"
                        style={{
                            color: (Math.round(vote_average * 10) / 10) < 5 ? 'red' : (Math.round(vote_average * 10) / 10) <=6.5 ? 'darkorange' : 'gold'
                        }}
                    >
                        {Math.round(vote_average * 10) / 10}
                    </Text>
                </View>

                <View
                    className="flex-row items-center justify-between"
                >
                    <Text
                        className="text-xs text-light-300 font-medium mt-1"
                    >
                        {release_date?.split('-')[0]}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

export default MovieCard;
