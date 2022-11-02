import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring';

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const transitions = useTransition(modalVisible, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-40px)" }
    });


    return (
        <div>
            <button
                className="show-modal-button"
                onClick={() => setModalVisible(true)}
            >
                Show modal
            </button>
            {transitions((styles, item) => item && <animated.div style={styles}>✌️

                <button onClick={() => { setModalVisible(false) }}>close me</button>
            </animated.div>)}
        </div>
    );
}
export default Modal

