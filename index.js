// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Califonia King bed", artist: "Rihanna" , genre: "RNB" },
    { title: "Bitch Better have my money", artist: "Rihanna" , genre: "RNB"},
    { title: "Freedom", artist: "Rihanna" , genre: "RNB"},
    { title: "Prayer", artist: "Joyous Celebration" , genre: "Gospel"},
    { title: "Holly spirit", artist: "Joyous Celebration" , genre: "Gospel"},
    { title: "When you music,was house music", artist: "Mobi-Dixon" , genre: "House"},
    { title: "The love i know,i deserve", artist: "Donald" , genre: "House"},
    { title: "Nkosi", artist: "Oscar Mbo" , genre: "Afro Tech"},
    { title: "Tomorrow", artist: "Cairo" , genre: "Afro Tech"},
    { title: "God's Love", artist: "Dr Tumi", genre:"Gospel",},
    { title: "love on the brain", artist :"Rihanna" , genre:"RNB" },
    { title: "God loves me",artist:"Dr Tumi" , genre:"Gospel"},
    { title: "as you are",artist:"The Weekend", genre:"Hip-HOP"},
 
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardian= {
    "Star-Lord": ["Rock"],
    "Gamora": ["Pop"],
    "Drax's": ["House"],
    "Rocket's": ["Gospel"],
    "Groot's": ["HIP-HOP"],

    // Add preferences for Drax, Rocket, and Groot
};

//Function to generate playlist based on preferred genre
function generatePlaylist(guardians,songs) {

    return Object.keys(guardians).map(guardian=>{
        const genres = guardians[guardian];
        const playlist = songs.filter(song => genres.includes (song.genre))
    return {guardian , playlist }; 
    });   
}

// Generate playlists for each guardian
function createPlaylistElement(playlist) {
    const playListDiv = document.createElement('div'); 
    playListDiv.classList.add('playlist'); 

const guardianHeading = document.createElement("h4");
guardianHeading.textContent = `${playlist.guardian}'s Playlist`; 
    playListDiv.appendChild(guardianHeading); 

    playlist.playlist.forEach(song => {
    const songDiv = document.createElement("div"); 
    songDiv.classList.add('song'); 

 const songTitle = document.createElement("span"); 
 songTitle.classList.add("song-title"); 
 songTitle.textContent = song.title;
 songDiv.appendChild(songTitle); 

 const sontArtist = document.createElement("span"); 
 sontArtist.classList.add("song-artist"); 
 sontArtist.textContent = `by ${song.artist}`; 
 songDiv.appendChild(sontArtist); 

 playlist.appendChild(songDiv); 

})

return playListDiv
}

//function to display playlist for each Guardian
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists'); 
    if (!playlistsContainer){
        console.error("Element with ID 'playlists' not found");
        return; 
    }

    playlists.forEach(playlist => {
        const playlistElement = createPlaylist(playlist); 
        playlistsContainer.appendChild(playlist); 
    })

}


/*
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs); 
*/
const playlists = generatePlaylist(guardian, songs);
displayPlaylists(playlists); 