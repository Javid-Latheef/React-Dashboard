import { connect } from 'react-redux'
import { withStateHandlers, lifecycle } from '../../utils/index'
import DashboardComponent from '../../components/dashboardComponent/dashboard'
import { getDashboardInfo } from '../../js/actions/dashboardAction'

const initialState = {
    count : 0
}

const addHandlers = (state, props) => {
    return {
      buttonClick: () => {
          props.setCount(props.count + 1)
      }
    }
}

const DashboardContainer = (props) => {
    const allProps = withStateHandlers(initialState, addHandlers, props)
    lifecycle(() => {
      allProps.getDashboardInfo()
    })
    return DashboardComponent(allProps)
}

const mapStateToProps = (state) => {
    return {
      dashboard: state.dashboard
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      getDashboardInfo: () => dispatch(getDashboardInfo())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
