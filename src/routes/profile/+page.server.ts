import type { PageServerLoad } from "./$types";
import type { Transaction } from "$lib/types";

export const load: PageServerLoad = async ({ locals }) => {
  return {
    user: locals.user,
    transactions: await locals.pb.collection('transactions').getList<Transaction>(1, 5, {
                            sort: "-date"
                        })
  };
};

