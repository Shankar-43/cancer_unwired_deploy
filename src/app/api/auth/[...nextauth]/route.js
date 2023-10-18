import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { login } from "services/authServices";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: `credentials`,
      async authorize(credentials) {
        // console.log(credentials);
        const fetchCsrfToken = async () => {
          try {
            const response = await fetch(
              process.env.NEXT_PUBLIC_CU_GET_TOKEN_API_ENDPOINT
            );
            console.log(response, "this  is token response");
            if (!response.ok) {
              throw new Error("Failed to obtain CSRF token");
            }
            const tokenData = await response.json();
            return tokenData.csrf_token;
          } catch (error) {
            console.error("Error fetching CSRF token:", error);
            throw error;
          }
        };

        const apiUrl = process.env.NEXT_PUBLIC_CU_LOGIN_API_ENDPOINT;
        const { userInput, password } = credentials;
        const csrfToken = await fetchCsrfToken();

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          body: JSON.stringify({ email: userInput, password }),
        });

        console.log("response is ", response);

        if (response.statusText === "OK") {
          const user = await response.json();
          // console.log(user, "this is the user");
          if (user.login_status === "success") {
            return user.user_details;
          }
          console.log("Login failed:", user.error_message);
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ user, token, trigger, session }) {
      //   update token if user is returned
      // console.log("token", token);
      if (user) {
        token.user = user;
        // console.log(`token user ${JSON.stringify(token.user)}`);
      }
      // update the trigger to include patient_id
      if (trigger === "update") {
        token.user = session.user;
      }
      //   return final_token
      return token;
    },
    async session({ session, user, token }) {
      session.user = token.user;
      // console.log(`Session user ${JSON.stringify(session.user)}`);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
