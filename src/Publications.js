import {
    chakra,
    Divider,
    VStack,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Card,
    CardBody,
    Image,
    Heading,
    Link,
    Icon,
} from "@chakra-ui/react";

import { BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoHtml5, BiLogoPython, BiSolidFileCss } from 'react-icons/bi';
import { SiTensorflow } from 'react-icons/si';

import RagPaperImage from './images/publications/rag_paper.png';
import QaPaperImage from './images/publications/qa_paper.png';
import ClassificationPaperImage from './images/publications/classification_paper.png';

const imageHeight = "250px";
const cardTextColor = "#1a202c";

const CardWithHoverEffect = chakra(Card, {
    baseStyle: {
        bg: "white",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            background: "gray.200",
            transform: "scale(1.008)",
        },
    },
});

// Remove underline on hover
const CustomLink = chakra(Link, {
    baseStyle: {
        _hover: {
            textDecoration: "none",
        },
    },
});

export default function Publications() {

    return (
        <>
            <Container maxW={"3xl"} id="publications">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                >
                    <Stack align="center" direction="row" p={4}>
                        <Divider orientation="horizontal" />
                        <HStack mx={4}>
                            <Text color="white" fontWeight={800}>
                                PUBLICATIONS
                            </Text>
                        </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                    <Stack px={4} spacing={5}>
                        <VStack>
                            <Box mb={20}>
                                <CustomLink href="https://arxiv.org/abs/2401.09555v1" isExternal>
                                    <div
                                        style={{
                                            transition: "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <CardWithHoverEffect
                                            width="100%"
                                            height="20%"
                                            direction={{
                                                base: "column",
                                            }}
                                            overflow="hidden"
                                        >
                                            <Image objectFit="cover" src={RagPaperImage} height={imageHeight} />
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Improving Retrieval for RAG based Question Answering Models on Financial Documents</Heading>
                                                    <Text py={2}>The effectiveness of Large Language Models (LLMs) in generating accurate responses relies heavily on the quality of input provided, particularly when employing Retrieval Augmented Generation (RAG) techniques. RAG enhances LLMs by sourcing the most relevant text chunk(s) to base queries upon. Despite the significant advancements in LLMs' response quality in recent years, users may still encounter inaccuracies or irrelevant answers; these issues often stem from suboptimal text chunk retrieval by RAG rather than the inherent capabilities of LLMs. To augment the efficacy of LLMs, it is crucial to refine the RAG process. This paper explores the existing constraints of RAG pipelines and introduces methodologies for enhancing text retrieval. It delves into strategies such as sophisticated chunking techniques, query expansion, the incorporation of metadata annotations, the application of re-ranking algorithms, and the fine-tuning of embedding algorithms. Implementing these approaches can substantially improve the retrieval quality, thereby elevating the overall performance and reliability of LLMs in processing and responding to queries. </Text>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                            <Box mb={-2}>
                                <CustomLink href="https://arxiv.org/abs/2402.01722" isExternal>
                                    <div
                                        style={{
                                            transition: "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <CardWithHoverEffect
                                            width="100%"
                                            height="20%"
                                            direction={{
                                                base: "column",
                                            }}
                                            overflow="hidden"
                                        >
                                            <Image objectFit="cover" src={QaPaperImage} height={imageHeight} />
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Enhancing Large Language Model Performance To Answer Questions and Extract Information More Accurately</Heading>
                                                    <Text py={2}>Large Language Models (LLMs) generate responses to questions; however, their effectiveness is often hindered by sub-optimal quality of answers and occasional failures to provide accurate responses to questions. To address these challenges, a fine-tuning process is employed, involving feedback and examples to refine models. The objective is to enhance AI models through continuous feedback loops, utilizing metrics such as cosine similarity, LLM evaluation and Rouge-L scores to evaluate the models. Leveraging LLMs like GPT-3.5, GPT4ALL, and LLaMA2, and Claude, this approach is benchmarked on financial datasets, including the FinanceBench and RAG Instruct Benchmark Tester Dataset, illustrating the necessity of fine-tuning. The results showcase the capability of fine-tuned models to surpass the accuracy of zero-shot LLMs, providing superior question and answering capabilities. Notably, the combination of fine-tuning the LLM with a process known as Retrieval Augmented Generation (RAG) proves to generate responses with improved accuracy. </Text>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                            <Box mb={-2}>
                                <CustomLink href="https://arxiv.org/abs/2404.07221v1" isExternal>
                                    <div
                                        style={{
                                            transition: "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <CardWithHoverEffect
                                            width="100%"
                                            height="20%"
                                            direction={{
                                                base: "column",
                                            }}
                                            overflow="hidden"
                                        >
                                            <Image objectFit="cover" src={ClassificationPaperImage} height={imageHeight} />
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Improving Classification Performance With Human Feedback: Label a few, we label the rest</Heading>
                                                    <Text py={2}>In the realm of artificial intelligence, where a vast majority of data is unstructured, obtaining substantial amounts of labeled data to train supervised machine learning models poses a significant challenge. To address this, we delve into few-shot and active learning, where are goal is to improve AI models with human feedback on a few labeled examples. This paper focuses on understanding how a continuous feedback loop can refine models, thereby enhancing their accuracy, recall, and precision through incremental human input. By employing Large Language Models (LLMs) such as GPT-3.5, BERT, and SetFit, we aim to analyze the efficacy of using a limited number of labeled examples to substantially improve model accuracy. We benchmark this approach on the Financial Phrasebank, Banking, Craigslist, Trec, Amazon Reviews datasets to prove that with just a few labeled examples, we are able to surpass the accuracy of zero shot large language models to provide enhanced text classification performance. We demonstrate that rather than needing to manually label millions of rows of data, we just need to label a few and the model can effectively predict the rest. </Text>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                        </VStack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
