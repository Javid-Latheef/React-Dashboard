
import { useState, useEffect} from 'react'
import reduce from 'lodash/reduce'
import merge from 'lodash/merge'

export const capitalizeFunc = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const lifecycle = (lambda, observables = []) => { useEffect(lambda, observables) }

export const withStateHandlers = (initialState = {}, addCustomHandler, props = {}) => {
    const enhancedUseState = reduce(initialState, (result, ele, key) => {
      const arr = useState(initialState[key])
      return key ? merge(result, { [key]: arr[0], [`set${capitalizeFunc(key)}`]: arr[1] }) : result
    }, {})
  
    const mergedProps = { ...props, ...enhancedUseState }
    const customHandler = addCustomHandler && typeof addCustomHandler === 'function' ? addCustomHandler(enhancedUseState, mergedProps) : {}
  
    return { ...mergedProps, ...customHandler }
}