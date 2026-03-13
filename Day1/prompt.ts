export const prompt1 =  `QUALIFIED PURPOSE CRITERIA:
A project has a qualified purpose if it is intended to:
1. Create or improve a product's functionality, performance, reliability, or quality
2. Develop a new or improved business component
3. Achieve a technical goal that improves the product or process

ANALYSIS REQUIREMENTS:
- Determine if this project meets the qualified purpose test
- Identify which specific criteria (1, 2, or 3) are satisfied
- Provide detailed reasoning with evidence from the project details
- Assess confidence level (High/Medium/Low)
- Clearly state the final determination as: Output: Met or Output: Not Met`

export const prompt2 =  `ELIMINATION OF UNCERTAINTY CRITERIA:
Technical uncertainty exists when, at the start of the project:
1. The capability or method to achieve the desired result is uncertain
2. The appropriate design of the product/process is uncertain
3. Existing information in the public domain does NOT eliminate the uncertainty

CRITICAL: The uncertainty must exist at the BEGINNING of the project, not about whether the project will succeed.

ANALYSIS REQUIREMENTS:
- Identify specific technical uncertainties that existed
- Confirm these uncertainties existed at project start
- Verify that publicly available information could not resolve them
- Assess if the uncertainties are technical (not business/market uncertainties)
- Clearly state the final determination as: Output: Met or Output: Not Met`

export const prompt3 =  `
PROCESS OF EXPERIMENTATION CRITERIA:
Qualified research must involve a process that fundamentally relies on experimentation:
1. Multiple alternatives must be evaluated
2. Testing, modeling, simulation, or systematic trial-and-error must be performed
3. The process must be used to eliminate technical uncertainty
4. It must be systematic, not random

Acceptable methods include:
- Modeling or simulation
- Systematic trial and error
- Prototyping and testing
- Iterative development with measurement
- A/B testing with metrics

ANALYSIS REQUIREMENTS:
- Identify the specific experimental methods used
- List the alternatives that were evaluated
- Confirm multiple options were tested
- Verify the process was systematic
- Ensure it was used to eliminate uncertainty
- Clearly state the final determination as: Output: Met or Output: Not Met`


export const prompt4 =  `TECHNOLOGICAL IN NATURE CRITERIA:
Qualified research must rely on principles of hard sciences:
✅ QUALIFIED SCIENCES:
- Engineering (mechanical, electrical, computer, chemical, etc.)
- Physics
- Chemistry
- Biology
- Computer Science

❌ NOT QUALIFIED:
- Social sciences (economics, psychology, business)
- Market research or surveys
- Routine data collection
- Administrative or clerical work

ANALYSIS REQUIREMENTS:
- Identify which hard sciences are applied
- Confirm technical personnel performed the work
- Verify hard science principles (not just tools) were used
- Distinguish between technical work and business process work
- Clearly state the final determination as: Output: Met or Output: Not Met`