import React, { useState, useRef, useReducer } from 'react';
import { errorLog  } from './utils';
import DefaultStyle from './style';
import { styleReducer } from './reducer';

function useModal() {
    const [isActive, setIsActive] = useState(false)
    const [Style, updateStyle] = useReducer(styleReducer, DefaultStyle)
    const Component = useRef(React.Fragment)
    const Condition = useRef({
        autoDisappear: 5,
        showOverlay: true,
    })

    const close = (event) => {
        if (event) {
            event.stopPropagation()
        }
        setIsActive(false)
        Component.current = React.Fragment
    }

    const startEvents = () => {
        if (Condition.current.showOverlay === false) {
            updateStyle({ overlay: { backgroundColor: "transparent" } })
        }
        if (Condition.current.autoDisappear !== false) {
            if(!Number.isInteger(Condition.current.autoDisappear)){
                Condition.current.autoDisappear = 5
            }
            setTimeout(close, Condition.current.autoDisappear * 1000)
        }
    }

    const handleStyleUpdate = (param) => {
        param.bodyStyle && updateStyle({body: param.bodyStyle})
        param.overlayStyle && updateStyle({overlay: param.overlayStyle})
        param.wrapperStyle && updateStyle({wrapper: param.wrapperStyle})
    }

    const show = (param) => {
        if (typeof param === 'function') {
            Component.current = param
        } else if (typeof param === 'object' && param !== null) {
            handleStyleUpdate(param)
            Component.current = param.component
            Condition.current = Object.assign(Condition.current,param)
        } else {
            errorLog(`expected paramter are [ function or object (not null) ] but passed [ ${typeof param} ]`, 'showModal')
            return
        }
        startEvents()
        setIsActive(true)
    }

    const Provider = () => isActive ?
    (
        <div className="react-modal-ui:bodyStyle" style={Style.body}>
            <div className="react-modal-ui:overlayStyle" style={Style.overlay} onClick={close}></div>
            <div className="react-modal-ui:wrapper" style={Style.wrapper} >
                <Component.current closeModal={close} />
            </div>
        </div >
    ) : null
    return {
        ModalProvider: Provider,
        showModal: show,
        closeModal: close
    }
}

export default useModal