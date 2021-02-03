import { connect } from 'react-redux'
import Navigation from '../components/Navigation'




const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        logged: state.logged
    }
}





export default connect(mapStateToProps, null)(Navigation)