import { memo } from 'react';

const SearchItem = memo(({ name }) => {
  return (
    <div className="pokemon-item">
      {name}
    </div>
  );
});

SearchItem.displayName = 'SearchItem';

export default SearchItem;