export type Question = {
  id: string
  conferenceId: string
  questioner: string
  text: string
  likes: number
  askedOn: string
}

export const countLikes = (questions: Question[]) => {
  return questions?.reduce((acc: number, currentValue: Question) => acc + currentValue.likes, 0);
} 
