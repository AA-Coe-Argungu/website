import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p>Welcome, {session.user?.name}</p>
    </div>
  );
}
