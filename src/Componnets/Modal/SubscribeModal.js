import React, { useState } from "react";
import { toast } from "react-toastify";

const SubscribeModal = () => {
  const [email, setEmail] = useState("");
  const handleSubcribe = () => {
    if (!email) {
      toast.warning("Please Provide a Email");
    } else {
      toast.success("Thank You For Subscribing");
      email.target.value = ''
    }
  };

  return (
    <div>
      <input type="checkbox" id="subscribe-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
        <label htmlFor="subscribe-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-xl text-error">Enter Your E-mail!</h3>
          <p className="py-4">
            Subscribe For Exclusive Tour Package Update. Get Free Tour Tips &
            Guide!
          </p>
          <div className="modal-action">
            <input
              onChange={(text) => setEmail(text)}
              type="email"
              placeholder="Enter Your Email Address"
              className="input w-full border border-primary outline-none"
            />
            <label onClick={handleSubcribe} htmlFor="subscribe-modal" className="btn btn-primary">
              Subscribe
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
