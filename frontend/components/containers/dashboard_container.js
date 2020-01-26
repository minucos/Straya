import { connect } from 'react-redux';
import Dashboard from "./dashboard";
import { fetchNewsfeed } from "../../actions/athletes_actions";
import { debounce } from 'debounce';

const mapStateToProps = (state) => {
    let feed = Object.values(state.entities.workouts)
        .concat(Object.values(state.entities.routes));

    let feedItems = feed.sort((a, b) => {
        let date1 = a.created_at;
        let date2 = b.created_at;

        if (date1 > date2) {
            return -1;
        }
        if (date1 < date2) {
            return 1;
        }
        return 0;
    })

    return ({
        athlete: state.entities.athletes[state.session.id],
        athletes: state.entities.athletes,
        workouts: state.entities.workouts,
        routes: state.entities.routes,
        locations: state.entities.locations,
        feedItems: feedItems
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchNewsfeed: (page) => debounce(dispatch(fetchNewsfeed(page)),200)
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);