import './Room.css';

const Room = ({ stage }) => {
  return (
    <div className={`room ${stage > 0 ? 'lights-on' : ''}`}>
      <div className="ceiling"></div>
      <div className="walls"></div>
      <div className="floor"></div>
      {stage > 0 && <div className="lamp"></div>}
    </div>
  );
};

export default Room;