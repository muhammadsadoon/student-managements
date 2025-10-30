import { supabase } from "../utils/supabase-client"

export const useFetchSupabase = async (tableName: string) => {
    const getData = await supabase.from(tableName).select("*");
    return getData;
}

export const useInsertSupabase = async (tableName:string,insertigData:any) => {
    const getData = await supabase.from(tableName).insert(insertigData).select("*");
    return getData;
}