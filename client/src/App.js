import { Box , styled } from '@mui/material';

import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Article from './components/Article';

const Container = styled(Box)`
      width:60%;
      margin: 30px auto 0 auto;

`

function App() {
  return (
    <Box >
      <Header />
      <Container>
         <InfoHeader />
         <Article />
      </Container>
     
    </Box>
  );
}

export default App;
