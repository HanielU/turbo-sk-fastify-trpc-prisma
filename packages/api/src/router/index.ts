import type { Context } from "../context";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;

/**
 * Unprotected procedure
 */
export const publicProcedure = t.procedure;

export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello world!"),
});

export type AppRouter = typeof appRouter;

// const isAuthed = middleware(({ next, ctx }) => {
//   if (!ctx.session?.user?.email) {
//     throw new TRPCError({
//       code: "UNAUTHORIZED",
//     });
//   }
//   return next({
//     ctx: {
//       // Infers the `session` as non-nullable
//       session: ctx.session,
//     },
//   });
// });
/**
 * Protected procedure
 */
// export const protectedProcedure = t.procedure.use(isAuthed);
