import './styles/index.scss';

function MiniPiano() {
  const createPianoKeys = () => {
    let count: number = 1;
    const pianoKeys = [];
    while (count <= 33) {
      pianoKeys.push(<li className='piano-key' key={count}></li>);
      count++;
    }
    return pianoKeys;
  };

  return (
    <div className='mini-piano'>
      <ul className='piano-keys-wrapper'>{createPianoKeys()}</ul>
    </div>
  );
}

export default MiniPiano;
