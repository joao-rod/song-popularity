function getResult(element) {
    let song_duration_ms = document.getElementById('song_duration_ms').value;
    let acousticness = document.getElementById('acousticness').value;
    let danceability = document.getElementById('danceability').value;
    let energy = document.getElementById('energy').value;
    let instrumentalness = document.getElementById('instrumentalness').value;
    let liveness = document.getElementById('liveness').value;
    let loudness = document.getElementById('loudness').value;
    let speechiness = document.getElementById('speechiness').value;
    let tempo = document.getElementById('tempo').value;
    let time_signature = document.getElementById('time_signature').value;
    let audio_valence = document.getElementById('audio_valence').value;
    const intercept = 53.05;

    result = (intercept + (song_duration_ms * (-0.21)) + (acousticness * (-1.05)) + (danceability * 2.09) + (energy * (-2.54)) + (instrumentalness * (-2.29)) + (liveness * (-0.68)) + (loudness * 2.7) + (speechiness * (-0.25)) + (tempo * (-0.29)) + (time_signature * 0.44) + (audio_valence * (-2.16))).toFixed(2);
    
    document.getElementById(element).style.backgroundColor = '#ffc107';
    document.getElementById(element).style.borderRadius = '0.375rem';
    document.getElementById(element).innerHTML = `Após análise dos valores, concluímos que a popularidade da música será de ${result}%.`;
}


function changeView(element) {
    document.getElementById(element).innerHTML = '';
    document.getElementById(element).style.backgroundColor = '#fff';
}