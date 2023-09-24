 import React from 'react'; 
 import { Link } from "react-router-dom";

 const PrimaryLink = ({id,text,to}) => {
    return (
        <Link
        id={id}
        to={to}
        className="text-gray-600 text-sm hover:text-gray-900 mt-2 "
      >
        {text}
      </Link>
    );
}

export default PrimaryLink;