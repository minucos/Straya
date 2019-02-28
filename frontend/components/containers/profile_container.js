import { connect } from 'react-redux';
import Profile from "./profile";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        athlete: state.entities.athletes[state.session.id],
    })
};

export default connect(mapStateToProps,null)(Profile);