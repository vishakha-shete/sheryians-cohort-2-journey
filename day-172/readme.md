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
- 3) 