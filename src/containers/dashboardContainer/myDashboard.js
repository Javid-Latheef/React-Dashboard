import { connect } from 'react-redux'
import { withStateHandlers, lifecycle } from '../../utils/index'
import MyDashboardComponent from '../../components/dashboardComponent/myDashboard'


const initialState = {
    
}

const addHandlers = (state, props) => {
    return {
        
      }
}

const MyDashboardContainer = (props) => {
    const allProps = withStateHandlers(initialState, addHandlers, props)
    lifecycle(() => {
    
    })
    return MyDashboardComponent(allProps)
}

const mapStateToProps = (state) => {
    return {
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MyDashboardContainer)