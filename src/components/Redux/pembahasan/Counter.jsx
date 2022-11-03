import { useDispatch, useSelector } from 'react-redux';
import { decrementWitchCheckingAction, increment } from '../../../app/fitures/CounterFitures/action';

export default function Counter() {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button style={{ width: '50px', height: '50px', fontSize: '20px' }} onClick={() => dispatch(decrementWitchCheckingAction(1))}>
        -
      </button>{' '}
      <span style={{ marginLeft: '10px', marginRight: '10px', fontSize: '20px' }}> {count} </span>
      <button style={{ width: '50px', height: '50px', fontSize: '20px' }} onClick={() => dispatch(increment(1))}>
        +
      </button>
    </div>
  );
}
