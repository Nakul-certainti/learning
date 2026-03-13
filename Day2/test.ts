import dotenv from "dotenv";
import {AzureOpenAI} from "openai";

dotenv.config();

const ai = new AzureOpenAI({
    apiKey: process.env.AZURE_OPENAI_API_KEY,
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiVersion: process.env.AZURE_OPENAI_API_VERSION
})

async function testapi(projectdetails : string , prompt : string ) {
    const response = await ai.chat.completions.create({
        model :process.env.AZURE_OPENAI_MODEL_NAME as string,
        messages : [
            { role : "user" , content : `${projectdetails} ${prompt}` }
        ]   
    });
    console.log(response);
    console.log(response.choices[0].message.content);
}
testapi("The project involved designing and building a scalable document intelligence and R&D assessment platform to automatically ingest project artifacts, extract technical evidence, and evaluate eligibility under the four-part test for a specific fiscal year. The business component was a new internal software capability intended to improve the speed, consistency, and auditability of R&D tax assessment workflows across client projects and attachments. The technical uncertainty centered on whether the system could reliably process varied unstructured inputs such as PDFs, technical documents, project notes, and attachment text, map them to the correct project and fiscal context, and generate structured assessment outputs without losing traceability or introducing false positives. To resolve that uncertainty, the team undertook a process of experimentation that included testing multiple ingestion patterns, prompt structures, extraction strategies, text-chunking approaches, metadata models, and response formats, while comparing performance across different model deployments and refining retry, validation, and storage logic based on observed failures. The work was technological in nature because it relied on software engineering, backend service design, API integration, vector-based retrieval, structured data transformation, and system orchestration to solve technical problems related to data ingestion accuracy, model response quality, and production-grade assessment execution.", 
`QUALIFIED PURPOSE CRITERIA:
A project has a qualified purpose if it is intended to:
1. Create or improve a product's functionality, performance, reliability, or quality
2. Develop a new or improved business component
3. Achieve a technical goal that improves the product or process

ANALYSIS REQUIREMENTS:
- Determine if this project meets the qualified purpose test
- Identify which specific criteria (1, 2, or 3) are satisfied
- Provide detailed reasoning with evidence from the project details
- Assess confidence level (High/Medium/Low)
- Clearly state the final determination as: Output: Met or Output: Not Met`);       
