import { Container } from "@mui/material";
import Home from "./pages/Home";
import AddNewWord from "./pages/AddNewWord";
import WordsCheck from "./pages/WordsCheck";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container maxWidth='lg'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addNewWord' element={<AddNewWord />} />
        <Route path='/wordsCheck' element={<WordsCheck />} />
      </Routes>
    </Container>
  );
}

export default App;
