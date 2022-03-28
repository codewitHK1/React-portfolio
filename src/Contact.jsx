import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    massage: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My Phone number is ${data.phone}. Email is ${data.email}.Here is what i want to say ${data.massage}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center fw-bolder shadow-lg"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form
              onSubmit={formSubmit}
              className="shadow p-3 mb-0 bg-body rounded"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label fw-bold"
                >
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control "
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your FullName"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label fw-bold"
                >
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label fw-bold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label fw-bold"
                >
                  Massage
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="massage"
                  value={data.massage}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
