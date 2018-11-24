import { connect } from "react-redux";
import Timer from "../components/Timer";
import { emitAction, listenActions } from "../actions/connection";
import { setCurrentTimer } from "../../commons/actions/index";

const mapStateToProps = ({ timer: { current } }) => ({ current });

const mapDispatchToProps = {
  listenActions: () => listenActions(location.pathname),
  triggerTimer: seconds =>
    emitAction(location.pathname, setCurrentTimer(location.pathname, seconds))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
