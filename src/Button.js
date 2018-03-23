import React from 'react';

const Button = (props) => {
  return(
    <div>
      <button className={props.className} onClick={props.clickHander}>
        {props.buttonText}
      </button>

    </div>
  )

}

export default Button;
