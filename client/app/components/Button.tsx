"use client"
import React, { MouseEventHandler, ReactElement, useEffect, useState } from 'react'
// import { ReactPlayerProps } from 'react-player';

// re-define the struct of the button interface 
interface ButtonProps {
<<<<<<< HEAD
  button: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
  className?: string
=======
  button?: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
  w: string;
  children?: ReactElement;
  handleClick?: MouseEventHandler;
>>>>>>> MNchanges
}

function Button(props: ButtonProps) {
  const [styling, setStyling] = useState("");

useEffect(() => {
  const text = props?.className ? props.className : " py-3 px-4 ";
  setStyling(/p(\w|\S)*/.test(text) ? text : text?.concat(" py-3 px-4 "))
}, [props]);

  return (
    <div className='py-4'>
      <button
        disabled={props.disabled}
        className={`bg-red-700 w-${props.w} hover:bg-red-800 rounded-md transition 
                    ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${styling}`
                  }
<<<<<<< HEAD
        type={props.type || "button"}
=======
        type={props.type}
        onClick={props.handleClick}
>>>>>>> MNchanges
      >
        {props.children}
        {props.button}
      </button>

    </div>
  );
}

export default Button;