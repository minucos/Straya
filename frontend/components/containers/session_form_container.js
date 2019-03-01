import { connect } from 'react-redux';
import SessionForm from './session';

const mapStateToProps = (state) => {
    let errors = state.errors.session.session;
    // debugger
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