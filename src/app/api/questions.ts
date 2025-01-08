const questions : Question[] =[
    {
      name: "Question01_2024",
      category: "Geometry Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question02_2024",
      category: "Algebra Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question03_2024",
      category: "Arithmetic Questions",
      difficulty: "Easy",
    },
    {
      name: "Question04_2024",
      category: "Statistics Questions",
      difficulty: "Medium",
    },
    {
      name: "Question05_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question06_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question07_2024",
      category: "Calculus Questions",
      difficulty: "Easy",
    },
    {
      name: "Question08_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question09_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question10_2024",
      category: "Calculus Questions",
      difficulty: "Easy",
    },
    {
      name: "Question11_2024",
      category: "Calculus Questions",
      difficulty: "Medium",
    },
    {
      name: "Question12_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
  ];

      export const getQuestions = ({page, limit}:GetQuestionProps) : Question[] => {
          const array = [];
          for (let i = (page-1)*limit; i < page*limit && questions[i]; i++) {
              array.push(questions[i]);
          }
          return array;
      }
  
      export const getLength = function() {
          return questions.length;
      }