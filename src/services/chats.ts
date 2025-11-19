import { supabase } from "../lib/supabase";

export const getTopics = async () => {
  try {
    const { data, error } = await supabase.from("topics").select("*");
    console.log("hoalnd", data);
    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error("❌ Error obtener los tópicos:", (error as Error).message);
    throw new Error("No se pudo obtener los tópicos.");
  }
};
