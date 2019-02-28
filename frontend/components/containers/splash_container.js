import { connect } from 'react-redux';
import Splash from "./splash";
import { login } from "../../actions/session_actions";

const mapDispatchToProps = (dispatch) => {
    return ({
        login: (athlete) => dispatch(login(athlete)),
    })
};

export default connect(null, mapDispatchToProps)(Splash);