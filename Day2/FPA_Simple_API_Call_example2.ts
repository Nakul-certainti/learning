import dotenv from "dotenv";
import { AzureOpenAI }  from "openai";
import { prompt1 } from "./prompt.ts";
import { prompt2 } from "./prompt.ts";
import { prompt3 } from "./prompt.ts";
import { prompt4 } from "./prompt.ts";
import { projectData1 } from "./projectdata.ts";
import { projectData2 } from "./projectdata.ts";

dotenv.config();

const openai = new AzureOpenAI({
    apiKey: process.env.AZURE_OPENAI_API_KEY,
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiVersion: process.env.AZURE_OPENAI_API_VERSION,
});

async function apirequest(sentence: string , prompt: string) {
   const response = await openai.chat.completions.create({
    model: process.env.AZURE_OPENAI_MODEL_NAME as string,
    messages: [
        { role: "user", content: `${sentence} ${prompt}` }
    ]
});
    // console.log(response);
    console.log(response.choices[0].message.content);
}

apirequest(prompt1, projectData1);
// apirequest(prompt2, projectData1);
// apirequest(prompt3, projectData1);
// apirequest(prompt4, projectData1);

// apirequest(prompt1, projectData2);
// apirequest(prompt2, projectData2);
// apirequest(prompt3, projectData2);
// apirequest(prompt4, projectData2);  