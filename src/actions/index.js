//action creator
//inside will return and action
export const selectedSong = (song) => {

	return{
		type: 'SONG_SELECTED',
		payload: song
	};
};
