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

interface TableProps {
    questions: Question[],
    limit: number
}

interface GetUserProps{
    page:number,
    limit:number
}

interface GetQuestionProps{
    page:number,
    limit:number
}

interface SelectLimitsProps{
    onLimitChange: (limit: number) => void
}

interface Question {
    name: string;
    category: string;
    difficulty: string;
  }
  