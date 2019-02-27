import { connect } from 'react-redux';
import SessionForm from './session';

const mapStateToProps = (state) => {
    let errors = state.errors.renderJSON;
    
    return ({
        errors: errors,
        formType: "login",
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (athlete) => dispatch(login(athlete))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);