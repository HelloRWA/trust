import { serverSupabaseServiceRole } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const adminClient = serverSupabaseServiceRole(event);
  const query = getQuery(event);

  const { network, category, status } = query;

  let queryBuilder = adminClient
    .from("trust_forbes")
    .select("*")
    .order("id", { ascending: true });

  // if (network) {
  //   queryBuilder = queryBuilder.eq("network", network);
  // }

  // if (category) {
  //   queryBuilder = queryBuilder.eq("category", category);
  // }

  // if (status) {
  //   queryBuilder = queryBuilder.eq("status", status);
  // }

  const { data, error } = await queryBuilder;

  if (error) throw error;
  return data;
});
