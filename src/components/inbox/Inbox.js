"use client";
import React from "react";
import InboxCancerUnwired from "./InboxCancerUnwired";
import InboxPatientQueries from "./InboxPatientQueries";
import { useSession } from "next-auth/react";

const Inbox = () => {
  const { data: session } = useSession();
  console.log(session, "this is session data");
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-5 offset-sm-2">
          <InboxCancerUnwired />
        </div>
        <div className="col-sm-5 gx-5">
          <InboxPatientQueries />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
