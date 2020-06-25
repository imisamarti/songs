import {combineReducers} from 'redux';

const songsReducer = () => {
	return [
	{title: 'Hit Me Baby One More Time', duration: "2:35"},
	{title: 'Smells Like Teen Spirit', duration: "3:02"},
	{title: 'Macarena', duration: "4:08"},
	{title: 'No Scrubs', duration: "3:35"}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	
	if(action.type === 'SONG_SELECTED'){
		return action.payload;
	}

	return selectedSong;
};


export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});