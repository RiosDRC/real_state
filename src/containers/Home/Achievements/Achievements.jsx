import './Achievements.css'
import AchievementCard from '../../../components/AchievementCard/AchievementCard';

const Achievements = () => {

  return (
    <div className="app__home-achievements">
      <AchievementCard number={20} letter="k" title="Award winning" />
      <AchievementCard number={14} letter="k" title="Property Ready" />
      <AchievementCard number={2} letter="m" title="Happy Customer" />
    </div>
  );
};

export default Achievements;
