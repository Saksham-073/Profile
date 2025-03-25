import React, { useState } from "react";

const SignUp = ({ setPage }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    emailAddress: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: ""
  });

  const handleInputClick = () => {
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fields = [
    { label: "Full Name", name: "fullName", required: true },
    { label: "Phone Number", name: "phoneNumber", required: true },
    { label: "Email Address", name: "emailAddress", type: "email", required: true },
    { label: "Password", name: "password", type: "text", required: true },
    { label: "Company Name", name: "companyName", required: false }
  ];

  return (
    <div className="w-full max-w-sm bg-white p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Create your <br /> PopX account</h2>
      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="relative">
            <label className="absolute top-[-9px] left-3 text-[13px] bg-white px-1 z-10 font-semibold">
              <span className="text-[#6C25FF]">{field.label}</span>
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              onClick={handleInputClick}
              className="w-full pl-3 border border-gray-300 rounded-md py-1.5"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Are you an Agency? *</label>
          <div className="flex items-center space-x-4 mt-2">
            {['Yes', 'No'].map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="isAgency" 
                  value={option.toLowerCase()} 
                  checked={formData.isAgency === option.toLowerCase()}
                  onChange={handleChange}
                  onClick={handleInputClick} 
                  className="form-radio text-[#6C25FF]" 
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPage(4)}
          className={`w-full rounded-md p-3 text-sm font-semibold text-white shadow-md cursor-pointer transition ${isHighlighted ? "bg-blue-500" : "bg-[#6C25FF]"}`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;