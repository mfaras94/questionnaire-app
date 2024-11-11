
import questionsReducer,{updateAns} from "../features/QuestionsSlice"

describe("questionsSlice", () => {
    const initialState = {
      items: { posts: [] },
      status: "idle",
      error: null,
      answers: [],
    };
  
    test("initial state", () => {
      expect(questionsReducer(undefined, { type: undefined })).toEqual(initialState);
    });
  
    test("updateAns action", () => {
      const testAns = ["Answer1", "Answer2"];
      const action = updateAns(testAns);
      const state = questionsReducer(initialState, action);
      expect(state.answers).toEqual(testAns);
    });  

  
  });