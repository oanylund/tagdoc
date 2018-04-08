import { connect } from "react-redux";
import { makeGetPatternById } from "../../../selectors/patternSelectors";
import {
  updatePattern,
  deleteNamedPattern,
  addToSelection,
  removeFromSelection
} from "../../../actions";

import PatternInput from "../../../components/PatternInput";

const makeToggleSelection = (selected, type, dispatch, index) => ids => {
  if (!selected) {
    dispatch(addToSelection(type, { prevKey: index, ids }));
  } else {
    dispatch(removeFromSelection(type, { prevKey: index, ids }));
  }
};

const selectionHandler = (dispatch, props, shiftClicked, stateProps) => {
  const { id, type, index, listOfIds } = props;
  const { selected, prevIndex } = stateProps;
  const toggleSelection = makeToggleSelection(selected, type, dispatch, index);

  if (prevIndex === null || !shiftClicked) {
    toggleSelection([id]);
  } else {
    const largestIndex = Math.max(index, prevIndex);
    const smallestIndex = Math.min(index, prevIndex);

    const selectedIds = [...listOfIds.slice(smallestIndex, largestIndex + 1)];

    toggleSelection(selectedIds);
  }
};

const makeMapStateToProps = () => makeGetPatternById();

const passDispatch = dispatch => ({ dispatch });

const mergeProps = (stateProps, { dispatch }, props) => ({
  ...props,
  ...stateProps,
  onInputChange: updateObj => dispatch(updatePattern(props.id, updateObj)),
  onDelete: () => dispatch(deleteNamedPattern(props.type, props.id)),
  onCardClick: shiftClicked =>
    selectionHandler(dispatch, props, shiftClicked, stateProps)
});

export default connect(makeMapStateToProps, passDispatch, mergeProps)(
  PatternInput
);
