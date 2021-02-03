import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}



export default connect(mapStateToProps, null)(Details)