type Props = {
  query: string[];
  handleQueryClick: (value: string) => void;
  clearQuery: () => void;
};

const FilterInput = ({ query, handleQueryClick, clearQuery }: Props) => {
  return (
    <div className="filter-input">
      <ul className="tags">
        {query.map((q) => (
          <li className="selected" key={q}>
            <p className="tag">{q}</p>
            <div className="remove-icon" onClick={() => handleQueryClick(q)}>
              <img src="/images/icon-remove.svg" alt="remove-icon" />
            </div>
          </li>
        ))}
      </ul>
      <button className="clear-btn" onClick={clearQuery}>
        Clear
      </button>
    </div>
  );
};
export default FilterInput;
