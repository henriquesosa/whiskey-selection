import useGlobal from '../utils/useGlobal';
import getArticlesList from '../api/articles';

const initialState = {
  items: []
};

const actions = {
  getArticlesList: async (store) => {
    const articles = await getArticlesList();
    store.setState({ items: articles });
  },
};

const useArticles = useGlobal(initialState, actions);

export default useArticles;
