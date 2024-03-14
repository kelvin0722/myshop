'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import z, { ZodError } from 'zod';

import { addProduct } from '@/services/api';

const productSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  description: z
    .string()
    .min(5, 'Description must be at least 5 characters long'),
  price: z.number().nonnegative(),
  currencyCode: z.string().regex(/^\$/).min(1),
  currencySymbol: z.string().regex(/^USD/).min(1),
  quantity: z.number().nonnegative().int(),
});

type FormData = {
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity: number;
};

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      await productSchema.parseAsync({
        ...data,
        price: parseInt(data.price as unknown as string),
        quantity: parseInt(data.price as unknown as string),
      });
      await addProduct(data as AddProductPayload);

      router.push('/products');
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Record<string, any> = error.flatten().fieldErrors;
        const errorMessages: { [key: string]: string } = {};
        for (const fieldName in fieldErrors) {
          if (fieldErrors.hasOwnProperty(fieldName)) {
            errorMessages[fieldName] = fieldErrors[fieldName][0];
          }
        }
        setFormError(JSON.stringify(errorMessages));
      } else {
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='m-10 w-2/4'>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-sm font-medium'>
          Name:
        </label>
        <input
          type='text'
          {...register('name', { required: true })}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          placeholder='Enter product name'
        />
        {errors.name && (
          <p className='mt-1 text-xs text-red-500'>Name is required</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='block text-sm font-medium'>
          Description:
        </label>
        <textarea
          {...register('description', { required: true })}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          rows={3}
          placeholder='Describe the product'
        />
        {errors.description && (
          <p className='mt-1 text-xs text-red-500'>Description is required</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='price' className='block text-sm font-medium'>
          Price:
        </label>
        <input
          type='number'
          {...register('price', { required: true })}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          placeholder='Enter price'
        />
        {errors.price && (
          <p className='mt-1 text-xs text-red-500'>Price is required</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='currencyCode' className='block text-sm font-medium'>
          Currency Code:
        </label>
        <select
          {...register('currencyCode', { required: true })}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          defaultValue='$'
        >
          <option value='$'>$</option>
        </select>
        {errors.currencyCode && (
          <p className='mt-1 text-xs text-red-500'>Currency Code is required</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='currencySymbol' className='block text-sm font-medium'>
          Currency Symbol:
        </label>
        <select
          {...register('currencySymbol', { required: true })}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          defaultValue='USD'
        >
          <option value='USD'>USD</option>
        </select>
        {errors.currencySymbol && (
          <p className='mt-1 text-xs text-red-500'>
            Currency Symbol is required
          </p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='quantity' className='block text-sm font-medium'>
          Quantity:
        </label>
        <input
          type='number'
          {...register('quantity', { required: true })}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          placeholder='Enter quantity'
        />
        {errors.quantity && (
          <p className='mt-1 text-xs text-red-500'>Quantity is required</p>
        )}
      </div>

      <div className='mb-4'>
        {formError && <p className='mt-1 text-xs text-red-500'>{formError}</p>}
      </div>
      <div>
        <button
          type='submit'
          className={`w-full rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 focus:shadow ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
