import { connect } from 'react-redux'
import Map from '../components/Map'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}



export default connect(mapStateToProps, null)(Map)