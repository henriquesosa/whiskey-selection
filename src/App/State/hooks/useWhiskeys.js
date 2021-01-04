import useGlobal from '../utils/useGlobal';
import getWhiskeyList from '../api/whiskeys';

const initialState = {
  items: []
};

const actions = {
  getWhiskeyList: async (store) => {
    const whiskeyList = await getWhiskeyList();
    store.setState({ items: whiskeyList });
  },
};

const useWhiskeys = useGlobal(initialState, actions);

export default useWhiskeys;
