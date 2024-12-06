// // // // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // // // const isPublicRoute = createRouteMatcher([
// // // //   '/sign-in(.*)',
// // // //   '/sign-up(.*)',
// // // //   '/api/webhooks(.*)',
// // // //   '/' // Added to match the behavior of `publicRoutes` from the first code
// // // // ]);

// // // // export default clerkMiddleware(async (auth, request) => {
// // // //   if (!isPublicRoute(request)) {
// // // //     await auth.protect();
// // // //   }
// // // // });

// // // // export const config = {
// // // //   matcher: [
// // // //     // Skip Next.js internals and all static files, unless found in search params
// // // //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// // // //     // Always run for API routes
// // // //     '/(api|trpc)(.*)',
// // // //   ],
// // // // };

// // // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // // // Define which routes are public and do not require authentication
// // // const isPublicRoute = createRouteMatcher([
// // //   '/sign-in(.*)', // Matches sign-in routes
// // //   '/sign-up(.*)', // Matches sign-up routes
// // //   '/api/webhooks(.*)', // Matches webhook API routes
// // //   '/' ,// Matches the root route
// // //   '/api/uploadthing',
// // //   '/:username',
// // //   "/search",
// // // ]);

// // // export default clerkMiddleware(async (auth, request) => {
// // //   // Protect routes that are not public
// // //   if (!isPublicRoute(request)) {
// // //     await auth.protect();
// // //   }
// // // });

// // // // Configuration for the middleware to skip certain paths
// // // export const config = {
// // //   matcher: [
// // //     // Skip Next.js internals and static files unless found in search params
// // //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// // //     // Always run for API routes
// // //     '/(api|trpc)(.*)',
// // //   ],
// // // };

// // import { authMiddleware } from "@clerk/nextjs";
 
// // export default authMiddleware({
// //   publicRoutes: ["/", "/api/webhooks/clerk", "/api/webhooks/livekit"],
// //   ignoredRoutes: ["/api/webhooks/clerk", "/api/webhooks/livekit"]
// // });
 
// // export const config = {
// //   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// //   runtime: "experimental-edge", // Add this line
// // };

// import { clerkMiddleware } from "@clerk/nextjs/server";
 
// export default clerkMiddleware({
//   publicRoutes: ["/", "/api/webhooks/clerk", "/api/webhooks/livekit"],
//   ignoredRoutes: ["/api/webhooks/clerk", "/api/webhooks/livekit"]
// });
 
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
//   runtime: "experimental-edge",
// };

// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const publicRoutes = createRouteMatcher([
//   "/",
//   "/api/webhooks/clerk",
//   "/api/webhooks/livekit"
// ]);

// export default clerkMiddleware(async (auth, req) => {
//   if (publicRoutes(req)) return null;
//   await auth.protect();
//   return null;
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
//   runtime: "experimental-edge",
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const publicRoutes = createRouteMatcher([
  "/",
  "/api/webhooks/clerk",
  "/api/webhooks/livekit"
]);

export default clerkMiddleware(async (auth, req) => {
  if (publicRoutes(req)) return null;
  await auth.protect();
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};