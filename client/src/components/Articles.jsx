import { Card, CardContent, Typography, Box, styled, Grid } from "@mui/material";

const Image = styled('img')({
    height:268,
    width: '88%',
    objectFit: 'cover',
    borderRadius: 5

});

const Component = styled(Card)`
    margin-bottom: 20px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 /12%);

`

const Container =  styled(CardContent)`
     padding: 8px;
     padding-bottom: 4px !important;

`
const Text = styled(Typography)`
     font-weight: 300;
     font-size: 22px;
     color: #44444d;
     line-height: 27px;


`
const RightContainer = styled(Grid)(({ theme }) => ({
    margin: '5px 0px 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: '0 5px'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '5px 0'
    }
}));

const Author = styled(Typography)`
     color: #808290;
     font-size: 12px;
     linr-height: 22px;

`
const Description = styled(Typography)`
     line-height: 22px;
     color: #44444d;
     margin-top: 5px;
     font-weight: 300
`
const Short = styled('b')({
    color: '#44444d',
    fontFamily: "'Convergence', sans-serif"
})
const Publisher = styled(Typography)`
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 10px;
    '& > *': {
        textDecoration: 'none',
        color: '#000',
        fontWeight: 900
    }
`;
const Articles = ({  data }) => {
    return (
        <Component>
            <Container>
               <Grid container>
                   <Grid lg={5} sm={5} xs={12} item>
                     <Image src= {data.url}/>

                   </Grid>
                   <RightContainer lg={7} md={7} sm={7} xs={12} item>
                     <Text>{data.title}</Text>
                     <Author>
                       <Short>short</Short> by {data.author} / {new Date(data.timestamp).toDateString()}
                     </Author>
                     <Description>
                        {data.description}
                     </Description>
                     <Publisher>
                        read more at &nbsp;
                        < a style={{ textDecoration: 'none', color: '#000',  fontWeight: 900}} href={data.link} target="_blank"><b>{data.publisher} </b> </a>
                     </Publisher>
                   </RightContainer>

               </Grid>
            </Container>
        </Component>
    )
}

export default Articles;