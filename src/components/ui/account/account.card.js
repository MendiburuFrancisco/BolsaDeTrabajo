import React from "react";
 

function AccountCard(children) {
  return (
    <>
      <div className="login-card bg-white-100 shadow-md rounded-lg   mb-8 flex items-center justify-center">
        <div>  {children.children}     </div>
      </div>
    </>
  );
}

export default AccountCard;
