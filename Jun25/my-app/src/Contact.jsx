import { useActionState, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  // State to track input validity (null for neutral, true for valid, false for invalid)
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);

  // Action function for form submission
  const handleLogin = async (prevState, formData) => {
    const name = formData.get('name');
    const email = formData.get('email');

    // Validation
    if (name.length < 3) {
      return { error: 'Name must be at least 3 characters long', success: null };
    }
    if (!email.includes('@')) {
      return { error: 'Email must be valid', success: null };
    }

    // Simulate an async operation (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // On success, navigate and return success state
    navigate('/');
    return { success: `Form submitted successfully, ${name}!`, error: null };
  };

  // Initialize useActionState with the action and initial state
  const [state, action, isPending] = useActionState(handleLogin, {
    error: null,
    success: null,
  });

  // Handle name input change and validation
  const handleNameChange = (e) => {
    const name = e.target.value;
    setNameValid(name.length >= 3);
  };

  // Handle email input change and validation
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailValid(email ? email.includes('@') : null); // Reset to null if empty
  };

  // Determine input border and ring classes based on validity
  const getInputClasses = (isValid) => {
    if (isValid === null) {
      return 'border-blue-500 focus:ring-blue-500'; // Neutral (blue)
    }
    return isValid
      ? 'border-green-500 focus:ring-green-500' // Valid (green)
      : 'border-red-500 focus:ring-red-500'; // Invalid (red)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Page</h1>
        <form action={action} className="space-y-5">
          {/* Display error or success messages */}
          {state.error && (
            <p className="text-red-600 text-center">{state.error}</p>
          )}
          {state.success && (
            <p className="text-green-600 text-center">{state.success}</p>
          )}

          {/* Name input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleNameChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${getInputClasses(
                nameValid
              )}`}
            />
          </div>

          {/* Email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleEmailChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${getInputClasses(
                emailValid
              )}`}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors ${
              isPending
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            style={{ display: isPending ? 'none' : 'block' }} // Hide button when pending
          >
            {isPending ? 'Pending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;