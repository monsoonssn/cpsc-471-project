import React from "react";
import { Formik, Field, Form } from "formik";
// import { RadioGroup, Radio } from "antd";

const ClientOrAgent = () => (
  <Formik
    initialValues={{
      userType: "",
    }}
    // onSubmit={async values => {
    //   await new Promise(r => setTimeout(r, 500));
    //   alert(JSON.stringify(values, null, 2));
    // }}
  >
    {({ values }) => {
      // const { values, handleChange } = props;
      // return (
      //   <Form>
      //     <p>Are you a client or an agent?</p>
      //     <div role="group">
      //       <label className="form-control">
      //         <Field type="radio" id="client" name="userType" value="client" />
      //         Client
      //       </label>

      //       <label className="form-control">
      //         <Field type="radio" id="agent" name="userType" value="agent" />
      //         Agent
      //       </label>
      //     </div>
      //     <div>type: {values.userType}</div>

      //   </Form>
      // );
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
          {/* <div>type: {values.userType}</div> */}
          <div>Further sign up info to be implemented...</div>
        </Form>
      );
    }}
  </Formik>
);

export default ClientOrAgent;
