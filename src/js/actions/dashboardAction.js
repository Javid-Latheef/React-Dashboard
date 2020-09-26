import * as env from '../../constants'
import { request } from '../../utils/ws-client'


export function getDashboardInfo() {
    return (dispatch) => {
        request({
          method: 'GET',
          url: env.host_url + 'posts/'
        })
          .then(res => {
            dispatch({
                type: "GET_DASHBOARD_INFO",
                payload: res.data
            })
          })
          .catch((error) => {
            dispatch({
                type: "GET_DASHBOARD_INFO_ERROR",
                payload: error
            })
          })
    }
}