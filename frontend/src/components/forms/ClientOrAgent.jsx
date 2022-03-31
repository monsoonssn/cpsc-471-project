import React from "react";
import { Formik, Field, Form } from "formik";

// const ClientOrAgent = () => (
//   <form action="">
//     <p>Are you a client or an agent?</p>
//     <label className="form-control">
//       <input type={"radio"} id="client" name="userType" />
//       Client
//     </label>

//     <label className="form-control">
//       <input type={"radio"} id="agent" name="userType" />
//       Agent
//     </label>
//   </form>
// );

const ClientOrAgent = () => (
  <Formik
    initialValues={{
      userType: "",
    }}
    onSubmit={async values => {
      await new Promise(r => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {({ values }) => {
      // const { values, handleChange } = props;
      return (
        <Form>
          <p>Are you a client or an agent?</p>
          <div role="group">
            <label className="form-control">
              <Field type="radio" id="client" name="userType" value="client" />
              Client
            </label>

            <label className="form-control">
              <Field type="radio" id="agent" name="userType" value="agent" />
              Agent
            </label>
          </div>
          <div>type: {values.userType}</div>
        </Form>
      );
    }}
  </Formik>
);

export default ClientOrAgent;
