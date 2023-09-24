import React from "react";
 

function AccountCard(children) {
  return (
    <>
      <div className="login-card bg-white-100  rounded-lg  shadow-md min-w-fit  mb-8 flex items-center justify-center">
        <div>  {children.children}     </div>
      </div>
    </>
  );
}

export default AccountCard;
