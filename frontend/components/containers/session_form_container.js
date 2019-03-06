import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";
import SessionForm from './session';

const mapStateToProps = (state) => {
    let errors = state.errors.session.session;

    return ({
        errors: errors,
        formType: "login",
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (athlete) => dispatch(login(athlete)),
        processDemo: (athlete) => dispatch(login(athlete)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);