import TrackPlayer from 'react-native-track-player';

const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Define la ruta a la carpeta "audio" dentro de "src"
    const audioPath = './src/audio/';

    // Define la lista de pistas de música que quieres reproducir
    const tracks = [
        {
            id: 'trackId1',
            url: require(`./${audioPath}Sparks.mp3`),
            title: 'Sparks',
            artist: 'Coldplay',
            //artwork: require(`./${audioPath}track1.png`)
        },
      /*  {
            id: 'trackId2',
            url: require(`./${audioPath}track2.mp3`),
            title: 'Track Title 2',
            artist: 'Track Artist 2',
            artwork: require(`./${audioPath}track2.png`)
        },*/
        // Agrega más pistas si es necesario
    ];

    // Agrega las pistas a la cola
    await TrackPlayer.add(tracks);

    // Inicia la reproducción de la primera pista
    await TrackPlayer.play();
};

// Llama a la función start para comenzar la reproducción
start();
