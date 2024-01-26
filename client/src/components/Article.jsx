import { useEffect , useState} from 'react';
import { Box } from '@mui/material';
import { getNews } from '../service/api';

import Arcticles from './Articles'




const Article = () =>{

     const [news, setNews] = useState([]);

    useEffect(() =>{

        dailyNews();

    }, []);

    const dailyNews =  async () =>{
        let response =  await getNews();
        // console.log(response);
        setNews(response.data);
    }

    return(
        <Box>
            {
              news.map(data => {
                  return <Arcticles data={data} />
                
              })
            }
        </Box>

    )
}

export default Article;