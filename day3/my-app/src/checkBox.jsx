import PropTypes from 'prop-types';

function checkBox({ showPremium, onSelectPeridium }) {
  return (
    <div className="flex space-x-2 text-base">
      <form>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showPremium}
            onChange={() => onSelectPeridium(!showPremium)}
          />
          <p className="pl-0">Show Premium only</p>
        </label>
      </form>
    </div>
  );
}

checkBox.propTypes = {
  showPremium: PropTypes.bool.isRequired,
  onSelectPeridium: PropTypes.func.isRequired,
};

export default checkBox;
