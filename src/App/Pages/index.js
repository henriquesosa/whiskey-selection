import React, { useEffect, useState } from 'react';

import Header from '../../Base/Components/Header';
import Filter from '../../Base/Components/Filter';
import Cards from '../../Base/Components/Cards';
import Card from '../../Base/Components/Card';
import Articles from '../../Base/Components/Articles';

import useWhiskeys from '../State/hooks/useWhiskeys';
import useArticles from '../State/hooks/useArticles';

const DEFAULT_FILTER = 'all';

const getFilterList = (items = []) => {
  const regions = items.map((item) => item.region);
  regions.unshift(DEFAULT_FILTER);
  return regions.filter((v, i, a) => a.indexOf(v) === i);
};

const App = () => {
  const [whiskeyList, setWhiskeyList] = useState([]);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [whiskeys, whiskeyActions] = useWhiskeys();
  const [articles, articleActions] = useArticles();
  const filters = getFilterList(whiskeys.items);

  useEffect(() => {
    whiskeyActions.getWhiskeyList();
    articleActions.getArticlesList();
  }, []);

  useEffect(() => {
    if (whiskeys.items.length) {
      setWhiskeyList(whiskeys.items);
    }
  }, [whiskeys]);

  const chooseFilter = (el) => {
    const filter = el.target.textContent;

    setFilter(filter);

    if (filter === DEFAULT_FILTER) {
      setWhiskeyList(whiskeys.items);
    } else {
      const items = whiskeys.items.filter((item) => item.region === filter);
      setWhiskeyList(items);
    }
  };

  console.log(articles);

  return (
    <main>
      <Header />
      <Filter
        filters={filters}
        selectedFilter={filter}
        chooseFilter={chooseFilter}
      />
      <Cards>
        {whiskeyList.map((item, index) => (
          <Card key={`${item.title}-${index}`} item={item} />
        ))}
      </Cards>
      <Articles articles={articles.items} />
    </main>
)};

export default App;
