'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData ) => {
    console.log('Form Data:', data);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        {submitted ? (
          <p className="text-green-600">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">First Name *</label>
                <input type='text'
                  {...register('firstName', { required: 'First Name is required' })}
                  className="w-full p-2 border rounded"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Last Name *</label>
                <input type='text'
                  {...register('lastName', { required: 'Last Name is required' })}
                  className="w-full p-2 border rounded"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium">Email Address *</label>
              <input type='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                })}
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Query Type *</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" value="General Enquiry" {...register('queryType', { required: 'Query Type is required' })} />
                  General Enquiry
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value="Support Request" {...register('queryType', { required: 'Query Type is required' })} />
                  Support Request
                </label>
              </div>
              {errors.queryType && <p className="text-red-500 text-sm">{errors.queryType.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Message *</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 border rounded"
                rows={4}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" {...register('consent', { required: 'You must consent to be contacted' })} />
              <label className="text-sm">I consent to being contacted by the team *</label>
            </div>
            {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}

            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
