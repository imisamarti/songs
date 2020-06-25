//action creator
//inside will return and action
export const selectedSong = () => {

	return{
		type: 'SONG_SELECTED',
		payload: song
	};
};
