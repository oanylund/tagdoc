import { connect } from "react-redux";
import { getPatternById } from "../../../selectors/patternSelectors";
import { updatePattern, deleteNamedPattern } from "../../../actions";

import PatternInput from "../../../components/PatternInput";

const mapDispatchToProps = (dispatch, props) => ({
  onInputChange: updateObj => dispatch(updatePattern(props.id, updateObj)),
  onDelete: () => dispatch(deleteNamedPattern(props.type, props.id))
});

export default connect(getPatternById, mapDispatchToProps)(PatternInput);
