import React, { useEffect, useState } from 'react';

const MusicPlayer = () => {
  const audioUrls = [];
  //플레이 리스트
  const [playlist, setPlaylist] = useState(['제목1', '제목2', '제목3']);
  //현재 재생중인 음악
  const [currentSong, setCurrentSong] = useState(0);
  //음악 재생, 음악 일시정지를 위한 상태
  const [isPlaying, setIsPlaying] = useState(false);
  //오디오 박스
  const [audio, setAudio] = useState(new Audio(audioUrls[currentSong]));

  useEffect(() => {
    //Audio 박스 객체를 초기화
    setAudio(new Audio(audioUrls[currentSong]));

    //재생중을 누를 경우 재생이 될 수 있도록 설정
    if (isPlaying) {
      audio.play();
    }

    //Audio 시작할 때 시간과 일시정지를 설정
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentSong]);

  //재생버튼을 누를 때 재생이 될 수 있도록 설정
  const playSong = () => {
    setIsPlaying(true);
    audio.play();
    console.log('now playing : ', playlist[currentSong]);
  };

  //일시정지버튼을 누를 때 정지가 될 수 있도록 설정
  const pauseSong = () => {
    setIsPlaying(false);
    audio.pause();
    console.log('pausing...');
  };

  //재생목록
  const displayPlaylist = () => {
    console.log('playlist : ', playlist.join(', '));
  };

  //다음곡 재생
  const playNextSong = () => {
    const nextSong = (currentSong + 1) % playlist.length;
    setCurrentSong(nextSong);
    setIsPlaying(true);
    console.log('play next', playlist[nextSong]);
  };

  return (
    <div>
      <h1>Music Player ദ്ദി*ˊᗜˋ*)</h1>
      <p>now playing : {playlist[currentSong]}</p>
      <button onClick={playSong} disabled={isPlaying}>
        PLAY
      </button>
      <button onClick={pauseSong} disabled={!isPlaying}>
        PAUSE
      </button>
      <button onClick={playNextSong}>NEXT</button>
      <button onClick={displayPlaylist}>PLAYLIST</button>
    </div>
  );
};

export default MusicPlayer;
