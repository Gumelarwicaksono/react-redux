import { Provider } from 'react-redux';
import Counter from './pembahasan/Counter';
import store from '../../app/store';

export default function Redux() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
