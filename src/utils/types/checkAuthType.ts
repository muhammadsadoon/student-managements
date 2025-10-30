export type CheckAuthRole = "Admin" | "Student";
export type CheckAuthStateType = boolean | string | undefined | null;

export type FromDataTypeForSendFormToSupabase = {
    name:string,
    email:string,
    number:number,
    subject: string,
    image_url: string,
    gender:boolean
}