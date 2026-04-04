# langgraph-ai-arena
“An AI system where multiple LLMs compete, and an intelligent judge selects the best response.”


- npm init -y = we run this commad for initiatinng node js packages
- npm i -D typescript ts 
- this all packages used during development 
- npx tsc --init = then we have tscinfig.json file 
im tsconfig.json set root dir as "."
then we are creating src folder 
in which creating app.ts file 
 run command then npm i express dotenv

then in app.js 

import express from "express";

importing express because we are using express package here so in package.json file type is module - "type": "module",
and creating one script "dev":"tsx watch server.js"

const app = express();

app.get("./",(req,res)=>{
    res.send("hello, world")
})

export default app;

after that we are installing the types of expressjs package so run command in command prompt
- npm i -D @types/express types/node

- in typescript typescript need to understand different types so express packages and any package install using this command 

/node package is usefull for for in building functionality of nodejs 

next in root folder we are creating service.js file and in server.ts we are importing the file app.js

import app from "./src/app.js"
- wheneevr ur writing any ts file we have to import it using js extention like app.js although file name end with ts but we have to import it using js 

then we are starting the server here

- app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

then run command npm run dev in command prompt u see server is started running at port 3000
- here we are using watch so whenever im updating server.js file then server restart 
- here basic server setup is done 
- then now what we are doing 
- our project is ai-battle-arena in which what exactlly is happenning lets understand first and why we are using lang-graph in this project 

- there is one user and this user sends a problem statement and this problem statement is goes to the two different different ai models one model is can be a mistral and second one is a gemini in both model send same input because we are using two different model so this two models produce one different solution after producing this two different solution their is one judge is present this judge is one another ai agent in two ai send a same information and both model produces special special solution and this solution sends to the judge calles solution_1 and solution_2 judage gives us a score for both solution same score gives to the user solution_1 score and solution_2 score final date comes in which solution_1 solution_2 score for both the solution and this data we are showing to the user 

lets think u dont know about the lang graph firstlly think u are writing a code for send problem statement to ai models

scudo code
- take problem statement  from user this is first step
- sends a problem statement to both ai models/ assign the problem statement to both ai
- five both solutions to the ai judge for comparision
judge gives us a 
                - score_solution_1
                - score_solutiom_2
                - feedback_solution_1 
                - feedback_solution_2
the sequesnce of the code is top to bottom 

so now im creating function like 

user_input= "write factorial code in js" - so users input is like this 

then function so function is like
 -const [solution_1,solution_2] generateSolutions(user_input) - and this function return me a solution_1 and a solution_2
- one function we are calling and this function and their is a one another function we can return to 

const result = await judgeSolution[solution1.solution2] -creating one result here ai can judge the solution and gives a output so we can do  thngs like this we can write like this code in javascript  but when we work with ai then this workflow is very small workflow

understanding with example when your working with ai how many long the features and  workflows

- lets say their is one system design problem and system design problem is design an youtube like appliation 
 first step is 
 1) ask for functional requirements - like how much users it can serve video qaulity
 2) ask for the non functional requiement - latency when user clicks on video so vdo straming time seconds how much 
 3) figure out the apis in the system - find apis
 4) figure out the entities in the system - video, comment, like 
 5) create high level design of the system - this one more workflow 
 and now i tell to ai i wantent to solve this system design question and this are the steaps requires still this workflow is small but what i mean when we have the workflow where we have to implement things using the sequence and their involve the ai that time we are using a langgraph because with the help of langgraph we can create a workflow very structurelly we can guide to ai like u have do this steap next but we can do this thing using javascript but their we have to write long code if dont use langcahain and create workflow with js after writing the code next developer will be confused and the speed of project also slow and the productivity also low if developer productivity is slow then company goes in loss so this is long term process and this is the reason behind why we are not usong vanila js we are using a langgraph

 - so now understand how to learn langgraph 
 - in langgraph we have two thing nodes and edges 
 now we are firstlly creating a nodes and after that edges 
 so we have to setup this both laggraph and  langchain

 so firstlly we are installing a langchain run a command in command prompt
 - npm i langchain @langchain/langgraph @langchain/google @langchain/mistralai @langchain/cohere 
 - so this are the packages here we are installing after this we need to install one more package langchain core 
 - npm i @langchain/core
 - core has more properties like dependencies so lets install them also 

 now in src folder we are creating folder with name AI and in ai folder we are creating a file calles model.ai.ts

 in model.ts firstlly importing a chat google
 - import { ChatGoogle } from "@langchain/google";
importing ome another thing chatmistral and chat cohere

after this in src folder create a new folder callled config and in cofig folder create a file called config.ts
in this file we are importing dotenv

- import dotenv from "dotenv";
- dotenv.config();

type of api key
type CONFIG = {
   readonly GOOGLE_API_KEY: string;
    readonly MISTRAL_API_KEY: string;
    readonly COHERE_API_KEY: string;
};

here is api key
const config: CONFIG = {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
    COHERE_API_KEY: process.env.COHERE_API_KEY || ""
};

export default config;

after that in model.ai.ts
we have ti import config 
import config from "../config/config.js";

here is model and keys
export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: config.GOOGLE_API_KEY
});

- here we are using mistral ai model
export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: config.MISTRAL_API_KEY
});

export const cohereModel = new ChatCohere({
    model: "command-r-08-2025",
    apiKey: config.COHERE_API_KEY
});

here we exported three different different models we are using this three model with different different purpose 

now we have to use langgraph also so firstlly now
creating a graph.ai.ts file in ai folder
in this file we are importing 

import {stateGraph, stateSchema,type GraphNode} from "@langchain/langgraph"

we importing a stateGraph , stateSchema ,type GraphNode

Schema :- Schema if for telling a format and model is for operation perform

what is state schema when u are creating a graph using langgraph then in that lots of type of nodes are present and these all nodes working same work in sequence but in one graph their are multiple nodes but if nodes want to transfer a data then the data need to be in proper fromat and this fronat in data node in which format share in nodes this format defines a stateschema 

stateSChema : - stateschema is used to  which data is nodes sharing data with eachother that format defining used a stateschema

after importing we are creating stateschema
import {stateGraph , stateSchema , type GraphNode} from "@langchain/langgraph"

const state = new stateSchema({
    
})

then istall package
- npm i zod

lets understand zod 
- zod is typescript-first-schema-validation-library
- it is used define a type in typescript 

-lets understand which graph we are creating now 
- theire is one solution node and one is judge node at solution node users problem send on solution node and generating two different solution using different model and then giving this two solutions to judge and judge gives a final score because here data is transfer from one node to another one and this data in which format tranfering we have to tell that so in graph.ai.ts our state in which we are showing how our data looks like 

firstly 
- import z from "zod"

in state i have one problem which state is string and solution1 string with default empty string 

like this data format 
const state = new stateSchema({
    problem: z.string().default(""),
    solution_1: z.string().default(""),
    solution_2: z.string().default(""),
    judge:z.object({
        solution__1_score: z.number().default(0),
        solution__2_score: z.number().default(0),
        solution_1_reasoning: z.string().default(""),
        solution_2_reasoning: z.string().default(""),
    })
})

after this at top importing mistralModel cohereModel

import { cohereModel, mistralModel } from "./model.ai.js";

now i creating one solution node here
the solution node type is graph node and it expecting a type of state and it ask u parameter here after than returning solution1 and 2 
- lets understand what is thi function exactlly is there is one user and solutio node solution node what exactlly whants from us solution node ask for user problem and genearte two solution from two different different solution here is solution node ask for a state in state it will ask for ploblem to user in nodes data transfere it is node format 

const solutionNode: GraphNode<typeof state> = async (state) => {
    const [mistralResponse, cohereResponse] = await Promise.all([
        mistralModel.invoke(state.problem),
        cohereModel.invoke(state.problem),
    ]);
        return {
        solution_1: mistralResponse.text,
        solution_2: cohereResponse.text,
    };
};


after this we are moving toewards the judge ai gives a solution but when u want data in structured format     responseFormat: providerStrategy(z.object({
        solution_1_score: 7.
        solution_2_score: 4
        solution_1_reasoning: "reasoning for soln 1"
        solution_2_reasoning: "reasoning for soln 1"
    })), in this fromat i want a judge data 
    - when we want data in proper format then we have to create one agent and that agent can generate a data in proper format for me there is a one method fro agent creation called createagent
    - for that in top we have to import createagent and which format we want we have to give providestrategy if for agent creation u used different model from gemini model so u have to use toolstrategy

    -import { createAgent, HumanMessage, providerStrategy } from "langchain";

    after that createagent 

    const judge = createAgent({
    model: geminiModel,
    responseFormat: providerStrategy(z.object({
        solution_1_score: z.number().min(0).max(10),
        solution_2_score: z.number().min(0).max(10),
        solution_1_reasoning: z.string(),
        solution_2_reasoning: z.string(),
    })),
    systemPrompt: `you are a judge tasked with evaluating two solutions  generated 
    by different AI models please provide a score between 0 and 10 for each solution based on its quality relevance 
    and creativity also provide reasoning for the scores given the problem is: {problem} solution 1 is: {solution_1} solution 2 is: {solution_2}`,
})

- judge response

const judgeResponse = await judge.invoke({
    messages: [
        new HumanMessage(`
            problem: ${problem} 
            solution 1: ${solution_1} 
            solution 2: ${solution_2}
            please evaluate the solutions and provide scores and reasoning
            `),
    ]
});

- structured response 
const {
    solution_1_score,
    solution_2_score,
    solution_1_reasoning,
    solution_2_reasoning
} = judgeResponse.structuredResponse


- return the same data
return {
    judge: {
        solution_1_score,
        solution_2_score,
        solution_1_reasoning,a
        solution_2_reasoning
    }
}

so here we created judge node which ask for problem  and solution_1 and solution_2 and in this node we created judge to judge we are telling in this format generate response then response come then judge generate a response in which solution_1_score, solution_2_score and solution_1_resoning and solution_2_reasoning are present and with that we are running next with this to final state 

in graph two nodes are allready exist that is start node and end node start node and end node allready created by graph 
- start node used for starting the graph 
-  end node - at end node where grph ends

then we are creacting a graph 

const graph = new stateGraph(state)
 .addNode("solution", solutionNode)
    .addNode("judge_node", judgeNode)
    .addEdge(START, "solution")
    .addEdge("solution", "judge_node")
    .addEdge("judge_node", END)
    .compile()

export default async function (problem: string) {

    const result = await graph.invoke({
        problem: problem
    })

    return result

}


then in app.ts import 
- import graph  from "./ai/graph.ai.js";

and replaca the api with this one
- app.get("/", async (req, res) => {

    const result = await graph("What is the meaning of life?")
    res.json(result)

})

and then run command npm run dev 
- one problem will occurs change the model so change cohere model in model.ai.ts to this 
export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.COHERE_API_KEY
});

then run command and check on postman the solutions