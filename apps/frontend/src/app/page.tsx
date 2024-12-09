'use client';

import { formatDate, getDaysDifference } from '@monorepo/utils';
import { Button } from '@monorepo/ui';
import { userService, type User } from '@monorepo/api';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  console.log('1 23 234 234')

  const handleFetchUser = async () => {
    try {
      const userData = await userService.getCurrentUser();
      setUser(userData);
      setError('');
    } catch (err) {
      setError('Failed to fetch user data');
      console.error(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button variant="primary" size="lg" onClick={handleFetchUser}>
        Fetch User Data
      </Button>
      
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
      
      {user && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      <Button variant="secondary" size="md" className="mt-4">
        Secondary Button
      </Button>
      <div>
        <p>Today: {formatDate(today, 'MMMM dd, yyyy')}</p>
        <p>Days until next week: {getDaysDifference(today, nextWeek)}</p>
      </div>
    </main>
  );
}
