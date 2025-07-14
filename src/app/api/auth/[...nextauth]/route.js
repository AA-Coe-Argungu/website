import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add your own authentication logic here
        const user = { id: '1', name: 'Admin', email: 'admin@example.com' };
        console.log(req)
        if (credentials?.username === 'admin' && credentials?.password === 'password') {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  }
});

export { handler as GET, handler as POST };
