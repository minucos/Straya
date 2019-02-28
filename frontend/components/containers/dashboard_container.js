import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        athlete: state.entities.athletes[state.session.id],
    })
};

export default connect(mapStateToProps,null)(Dashboard);