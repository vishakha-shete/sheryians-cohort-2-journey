# day-172
- in yesterdays session what we learn is how to create a sandbox
- hopefully todays is the last day of that
- we are creating the sandbox service where our sandbox creating in which our vite development server is running
- in previous class our preview url in sandbox the vite server id running we want to preview that url so thats why 
-  in todays class we are learning another endpoints till now we list files in or sandbox 
- we need to create now a read files then create files and update files 

-  app.get("/read-files", async (req, res) => {

    const files = req.query.files;

    if (!files) {
        return res.status(400).json({
            message: "No files specified in query parameter",
            status: "error",
        });
    }

    const fileList = files.split(",");

    const results = await Promise.all(
        fileList.map(async (file) => {

            const filePath = `${WORKSPACE_DIR}/${file}`;

            try {

                const content = await fs.promises.readFile(filePath, "utf-8");

                return {
                    [file]: content,
                };

            } catch (err) {

                return {
                    [file]: `Error reading file: ${err.message}`,
                };

            }

        })
    );

    return res.status(200).json({
        message: "Files read successfully",
        files: Object.assign({}, ...results),
        status: "success",
    });

    - using this api created a read files 

    - after read file api we need to create a update file apis
import path from "path";

app.patch("/update-files", async (req, res) => {

    const updates = req.body.updates;

    if (!updates || !Array.isArray(updates)) {
        return res.status(400).json({
            message: 'Invalid request body. Expected an "updates" array.',
            status: "error",
        });
    }

    const results = await Promise.all(
        updates.map(async (update) => {

            const { file, content } = update;

            if (!file || content === undefined) {
                return {
                    error: "Invalid update object",
                };
            }

            const filePath = path.join(WORKSPACE_DIR, file);

            try {

                await fs.promises.writeFile(filePath, content, "utf-8");

                return {
                    [file]: "File updated successfully",
                };

            } catch (err) {

                return {
                    [file]: `Error updating file: ${err.message}`,
                };

            }

        })
    );

    return res.status(200).json({
        message: "File update results",
        results,
        status: "success",
    });

});




    - after apdate files we need to create a create files apis 

    - /**
 * @route POST /create-files
 * @description creates new files with the content specified in the request body.
 * the request body should contain a property 'files' with a JSON Array of objects, each object should have a 'file'
 * property specifying the file path (relative to the working directory) and a 'content' property
 * specifying the content for the new file.
 */
app.post("/create-files", async(req,res)=>{
    const files = req.body.files;

    if(!files || !Array.isArray(files)){
        return res.status(400).json({
            message: 'Invalid request body. Expected a JSON object with a "files" property containing',
            status: 'error',
        })
    }
    const results = await promiseHooks.all(files.map(async(fileObj)=>{
        const {file,content}= fileObj;
        const filePath = path.join(WORKSPACE_DIR, file);
        try{
            await fs.promises.writeFile(filePath, content, 'utf-8');
            return{
                [filePath]: 'file created successfully',
            }
        }catch(err){
            return{
                [filePath]: `Error creating file: ${err.message}`,
            }
        }
    }))
})

create file is created 
- but there is one problem in list files endpoints it gives us a folder name only like in output we only see the src and public but this two are the folders but here it comes only as a src 
- we dont have the content now we need to edit the list files api 
- so if we edited so what exactlly it is done
- the node modules folder in postman the node modules folder exist 
- the context i gave to it it can read the content present into the node modules folder 
- in the node modules folder there are many files are present 
- now it dosent egnore the node modules and dist folder so now it it return a data but the problem is that it return the node modules folder and in node modules folder lot of data is present but the data is not in our use 
- so created a list files api again
app.get("/list-files", async (req, res) => {

    const listFiles = async (dir, baseDir) => {

        const entries = await fs.promises.readdir(dir, {
            withFileTypes: true,
        });

        const files = [];

        const excludedDirs = [
            "node_modules",
            ".git",
            "dist",
            "build",
            ".next",
            ".cache",
        ];

        for (const entry of entries) {

            const fullPath = path.join(dir, entry.name);
            const relativePath = path.relative(baseDir, fullPath);

            if (
                entry.isDirectory() &&
                excludedDirs.includes(entry.name)
            ) {
                continue;
            }

            if (entry.isDirectory()) {
                files.push(...await listFiles(fullPath, baseDir));
            } else {
                files.push(relativePath);
            }
        }

        return files;
    };

    try {

        const files = await listFiles(
            WORKSPACE_DIR,
            WORKSPACE_DIR
        );

        return res.status(200).json({
            message: "Files listed successfully",
            files,
            status: "success",
        });

    } catch (err) {

        return res.status(500).json({
            message: `Error listing files: ${err.message}`,
            status: "error",
        });

    }

});

- now we are not applying it directlly
-  we are going with it 
- now we created the all four api soved the accurrs bug into and check all the apis into postman 
- now its running properally
- till now we created a four apis
- create-files , list-files , read-files, update-files
- 1) list-file
- have a api list-files which can list the all files 
- 2) create-file
- so have another api called create files which can create files 
- but till now we cannot create files into folder
- so we need to have this functionality as a create files into folder also 
- for that we need to make some changes into the create files api
- create files even the folder doesn't exists 
- i want to create new file inside a folder that is not created yet in node.js
- so for that we need to use the recursive true so updated the create api
- await fs.promises.mkdir(
                    path.dirname(filePath),
                    { recursive: true }
                );

                // Create the file
                await fs.promises.writeFile(
                    filePath,
                    content,
                    "utf-8"
                );
- like this 
- then here is done with this 
- so our agent is successfully deployed till now 
- in which it has apis with using that apis we can deployed things 
- with using agent we can now abdate the files finally
- now i want to show u this i am telling u how it will goes now 
- now lets talk on this how exactlly it is
- this time your vite agent and check with the vite agent container 
- so with this api we can edit the content of the vite 
- for saving this all we are using the s3
- the ai agent is hitting to the all apis 
- ai able to update but now is how ai can saving and storing so that feature is pending so we need to create that feature now now we are creating  a ai agent and with the help of that agent we can update the files
- so we are now creating that feature 
- so our sidebar agent what exactlly can done 
- the sidecar agent can update the files present innto the workspace 
- it gives us a some apis and with the help of that api we can update the vite development server 
- now we are starting to create our ai agents 
- we are creating it in ai-archistration 
-  npm i express morgan lagchain @langchain/mistralai @langchain/langgraph dotenv 
- this are the packages we are installing in it 
- after that we are creating a express server 
- now we are using langchain langgraph into it so for that we need to create routes and also along with that creating a folder with the name agents
- in which we are creating a multiple tools 
- multiple agents are creating into it 
- in agents folder creating a file nae called code.agent.js and also it has some tools so for that we are creating a file called tools.js and tools are creating using axios for that we need to install axios 
- firstlly we need to create some tools 
- axios
- one tool i am creating and for creating that tool 
- then we have to till now we are going with hard coded one api 
- we are calling one api on postman it list the present files into the container 
- so i am hitting only this file and this api 
- http://019f9904-a10a-706b-8a76-5a0cfc8b31c0.agent.localhost/list-files
- this api return like in this format 
- {
    "message": "Files listed successfully",
    "files": [
        ".dockerignore",
        ".gitignore",
        ".oxlintrc.json",
        "README.md",
        "dockerfile",
        "index.html",
        "package-lock.json",
        "package.json",
        "public/favicon.svg",
        "public/icons.svg",
        "src/App.css",
        "src/App.jsx",
        "src/assets/hero.png",
        "src/assets/react.svg",
        "src/assets/vite.svg",
        "src/index.css",
        "src/main.jsx",
        "vite.config.js"
    ],
    "status": "success"
}
- similiar way we need to tell the schema how our schema whant s data into it so our tool is helping into this 
- there we are using one another tool called zod so we need to install this 
- firstlly we can revised what exactlly we done till now 
- till now we have one main contaniner in which our vite dev server is running in which the workspace folder and agent sidecar workspace folder we snc this two folder with each other with the help of workspace-volume now in todays class in agent we created a some apis read-file, list-files,update-files,create-files
- we created this apis 
1) list-files : this in workspace folder the files present and list all the files present in the workspace folder 
- then again we created a read files api this api needs only file name it gives the content in return
- then again created a update files api it need the file and content for update and then it updates the content 
- then again one api is present name called create file api it creates a file 
- and this all operations into the workspace folder 
- this all things we are doing into the workspace folder 
- now we are creating one more service 
- the ai orchestration and this service where the preview is running the frontent is showing it can be update that 
- so now we are creating the ai orchesration service and with the help of ai it can be update the content present into the because the ai used the tools of ai and with the help of ai we can create tools 
- so now we are creating tools 
- the first tool can list the files 
- and the another tool we are creating is that 
- now we listed two apis in tools one is read file and list files there still pending is the update file or create file 
- 
created a tools and agent for checking changes working or not after creatinf tools checked that tools and 
- tool,js code
- import axios from "axios";
import { tool } from "@langchain/core/tools";
import * as z from "zod";

export const ListFiles = tool(
  async () => {
    try {
      console.log("=====================");
      console.log("using list files tool");
      console.log("=====================");

      const url =
        "http://019f9904-a10a-706b-8a76-5a0cfc8b31c0.agent.localhost/list-files";

      console.log("Calling:", url);

      const response = await axios.get(url, {
        timeout: 10000,
        proxy: false,
      });

      console.log("Status:", response.status);
      console.log(response.data);

      return JSON.stringify(response.data.files);
    } catch (err) {
      console.error("LIST FILES TOOL ERROR");
      console.error(err);

      if (err.response) {
        console.error("Response:", err.response.status, err.response.data);
      } else if (err.request) {
        console.error("No response received");
      } else {
        console.error("Message:", err.message);
      }

      throw err;
    }
  },
  {
    name: "list-files",
    description: "Lists all files in the project directory.",
  }
);

export const readFiles = tool(
    async ({ files }) => {
        console.log("=====================")
        console.log("using read files tool")
        console.log("=====================")

        const response = await axios.get(
            "http://019f9904-a10a-706b-8a76-5a0cfc8b31c0.agent.localhost/read-files?files=" +
            files.join(",")
        );
        console.log("=======================================")
        console.log("response from read files tool", response.data)
        console.log("=======================================")
        return JSON.stringify(response.data);
    },
    {
        name: "read_files",
        description:
            "Reads the contents of specified files.",
        schema: z.object({
            files: z.array(z.string())
        }),
    }
);

export const UpdateFiles = tool(
    async ({ files }) => {
        console.log("=====================")
        console.log("using update files tool")
        console.log("=====================")

        const response = await axios.patch(
            "http://019f9904-a10a-706b-8a76-5a0cfc8b31c0.agent.localhost/update-files",
            {
                updates: files,
            }
        );
        console.log("=======================================")
        console.log("response from update files tool", response.data)
        console.log("=======================================")

        return JSON.stringify(response.data);
    },
    {
        name: "update_files",
        description:
            "Update one or more existing files in the project. Use this tool whenever you need to modify source code, CSS, HTML, configuration files, or any project file.",
        schema: z.object({
            files: z.array(
                z.object({
                    file: z.string(),
                    content: z.string(),
                })
            ),
        }),
    }
);

- code.agent.js 
- import "dotenv/config";
import { ChatMistralAI } from "@langchain/mistralai";
import { createAgent } from "langchain";
import { ListFiles, readFiles, UpdateFiles } from "./tools.js"

console.log("Current directory:", process.cwd());
console.log("MISTRALAI_API_KEY:", process.env.MISTRALAI_API_KEY);

const model = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: process.env.MISTRALAI_API_KEY,
    "temperature":0,
});

console.log(
    ListFiles.name,
    readFiles.name,
    UpdateFiles.name
);

const agent = createAgent({
    model,
    tools: [ListFiles, readFiles, UpdateFiles],
})

const result = await agent.invoke({
    messages: [
        {
            role: "user",
            content: "Create a modern responsive home page for an online food ordering website.",
        },
    ],
});

console.dir(result, { depth: null });

- now we can see the output in preview url as we prompt the ai gives a answer
