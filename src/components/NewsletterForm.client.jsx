import {useState} from 'react';
import Spinner from './Spinner.client';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    setSubmitting(true);
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({email}),
    });
    setSubmitting(false);

    if (response.ok) {
      setSuccess(true);
    } else {
      setError(true);
    }
  }

  return (
    <form
      className="mx-auto max-w-2xl px-4 py-14 md:px-8"
      action="/api/subscribe"
      method="POST"
      onSubmit={submitForm}
    >
      <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
        {success ? (
          <p className="block text-sm font-medium text-gray-700 p-5">
            Welcome to the club!
          </p>
        ) : (
          <>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 p-5"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="flex-1 rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150"
            >
              {submitting && <Spinner />}
              Subscribe
            </button>
          </>
        )}
      </div>
      {error && (
        <p className="block text-sm font-medium text-red-700 p-5 text-center">
          Something went wrong.
        </p>
      )}
    </form>
  );
}
