import React from "react";
import { useForm } from "react-hook-form";
import "./Apply.css";

const Apply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="custom-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <div className="form-group">
          <select
            {...register("service", { required: "Please select a service" })}
          >
            <option value="">Select one</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>
          {errors.service && <p className="error">{errors.service.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="file"
            {...register("resume", { required: "Please upload your resume" })}
          />
          {errors.resume && <p className="error">{errors.resume.message}</p>}
        </div>
        <div className="form-group">
          <textarea
            placeholder="Comments"
            {...register("comments", {
              required: "Please add your comments",
            })}
          ></textarea>
          {errors.comments && (
            <p className="error">{errors.comments.message}</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default Apply;
