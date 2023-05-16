import { CSSTransition } from "react-transition-group";
import React, {ReactNode, useEffect, useState} from "react";


const WrapAnimation = (props: {
  element: ReactNode;
  path: string;
  match?: boolean
}) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
    return () => {
      setShow(false)
    }
  })
  return (
    <CSSTransition
      in={show}
      key={props.path}
      mountOnEnter={true}
      unmountOnExit={true}
      classNames={{
        enter: "animate__animated",
        enterActive: "animate__fadeInLeft",
        exit: "animate__animated",
        exitActive: "animate__fadeOutLeft",
      }}
      timeout={1000}
    >

      {props.element}
    </CSSTransition>
  );
};

export default WrapAnimation;
