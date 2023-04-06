import { useSelector } from 'react-redux';

export default function Profile() {
  const style = { maxHeight: '320px' };
  const imgFileName = useSelector((state) => {
    return state.img;
  });

  return (
    <div id="pb-3 text-md-right text-center">
      <img
        src={'img/' + imgFileName}
        alt="ProfilePhoto"
        style={style}
        className="img-fluid rounded"
      />
    </div>
  );
}
