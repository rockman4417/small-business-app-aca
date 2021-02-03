import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => dispatch(addListing(listing)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)