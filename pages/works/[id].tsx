import {
  Badge,
  Container,
  Grid,
  GridItem,
  List,
  ListItem
} from '@chakra-ui/react';
import ArticleLayout from '../../components/layouts/article';
import Paragraph from '../../components/paragraphy';
import { Title } from '../../components/works';
import { getAllWorkIds, getWorkData } from '../../libs/works';

export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false
  };
}

type staticProps = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: staticProps) {
  const workData = await getWorkData(params.id);
  return {
    props: {
      workData
    }
  };
}

type workProps = {
  workData: {
    id: string;
    title: string;
    year: string;
    platform: string;
    stack: string;
    abstract: string;
    description: string;
    contentHtml: any;
  };
};

export default function Work({ workData }: workProps) {
  const listitems: Array<keyof typeof workData> = ['platform', 'stack'];
  return (
    <ArticleLayout title="test">
      <Container maxW="container.lg">
        <Title>
          {workData.title} <Badge>{workData.year}</Badge>
        </Title>
        <Paragraph>{workData.description}</Paragraph>
        <List ml={4} my={4}>
          {listitems.map((listitem) => {
            if (listitem in workData) {
              return (
                <ListItem key={listitem}>
                  <Grid templateColumns="repeat(12, 1fr)">
                    <GridItem colSpan={{ base: 12, md: 2 }}>
                      <Badge colorScheme="cyan" mr={4}>
                        {listitem}
                      </Badge>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 10 }}>
                      {workData[listitem]}
                    </GridItem>
                  </Grid>
                </ListItem>
              );
            }
          })}
        </List>
      </Container>
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </ArticleLayout>
  );
}
