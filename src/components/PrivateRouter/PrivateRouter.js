// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const PrivateRouter = () => {
//   const { data: session, status } = useSession();
//   console.log("Session:", session); // Log the session data
//   console.log("Status:", status);
//   // Check if user is authenticated or not
//   const router = useRouter();
//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }
  
//   // Redirect unauthenticated users to the login page
//   if (!session && !isExcludedPage) {
//     router.replace("/login");

//     return null;
//   }
// };

// export default PrivateRouter;
