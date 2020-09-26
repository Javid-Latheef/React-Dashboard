import { connect } from 'react-redux'
import { withStateHandlers, lifecycle } from '../../utils/index'
import HeaderComponent from '../../components/dashboardComponent/header'


const initialState = {
    active : 'overview'
}

const addHandlers = (state, props) => {
    return {
        linkClick: (url) => {
            const activeTab = url.split('/')[2]
            props.setActive(activeTab)
        }
      }
}

const HeaderContainer = (props) => {
    const allProps = withStateHandlers(initialState, addHandlers, props)
    lifecycle(() => {
    
    })
    return HeaderComponent(allProps)
}

const mapStateToProps = (state) => {
    return {
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)