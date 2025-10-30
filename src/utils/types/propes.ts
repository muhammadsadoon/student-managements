export type AlertBoxType = {
    text: string | "",
    role: "Done" | "Error" | "info",
    time?: number
}

export type UserSignInSupabaseType = {
    name?: string,
    email: string,
    password: string,
    phone: number
}

export interface GetChildrenTypeFromToParentComponent {
    children: React.ReactNode
}
export interface GetChildrenTypeFromToParentComponentAdded extends GetChildrenTypeFromToParentComponent {
    isOpen?: boolean
}

export type TableSearchType = {
    search?: string
}

export type TeacherGettingDataType = null | {
    created_at: string,
    email: string,
    gender: boolean,
    id: number,
    image_url: string,
    name: string
    number: number,
    subject: string
}