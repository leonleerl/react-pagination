interface PaginationProps{
    totalPage: number,
    page: number,
    limit: number,
    siblings:number,
    onPageChange:(page:number|string)=>void
}

interface User {
    id:number,
    fullName:string,
    fullMobileNo:string,
    email:string,
    signupDate:string
}

interface UserProps {
    users: User[]
}

interface GetUserProps{
    page:number,
    limit:number
}

interface SelectLimitsProps{
    onLimitChange: (limit: number) => void
}