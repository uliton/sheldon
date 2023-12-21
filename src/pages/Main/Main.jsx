import React, { useEffect, useState } from 'react';
import DATA from '../../DATA.json';
import { AllSeasons } from '../../components/AllSeasons';
import { VideoPlayer } from '../../components/VideoPlayer';
import { VideoPreview } from '../../components/VideoPreview';
import { AllEpisodes } from '../../components/AllEpisodes/AllEpisodes';
import style from './Main.module.scss'; 

export const Main = () => {
  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);
  const [videoUrl, setVideoUrl] = useState('');
  const [isReadyForWatch, setIsReadyForWatch] = useState(false);

  useEffect(() => {
    setVideoUrl(DATA[season - 1].episodes[episode - 1]);
    setIsReadyForWatch(false);
  }, [episode]);

  return (
    <div className={style.main}>
      <section className={style.main__seasons}>
        <AllSeasons season={season} setSeason={setSeason} />
      </section>

      <section className={style.main__video}>
        {isReadyForWatch
          ? <VideoPlayer url={videoUrl} />
          : <VideoPreview episode={episode} setIsReadyForWatch={setIsReadyForWatch} />
        }
      </section>

      <section className={style.main__series}>
        <AllEpisodes
          season={season}
          episode={episode}
          setEpisode={setEpisode}
        />
      </section>
    </div>
  );
};
