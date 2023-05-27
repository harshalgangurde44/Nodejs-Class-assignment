const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    console.log("Data written successfully");
  } catch (err) {
    console.error(err);
  }
};

const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf8");
    console.log(JSON.parse(data));
  } catch (err) {
    console.error(err);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.appendFile(fileName, fileContent);
    console.log("Data appended successfully");
  } catch (err) {
    console.error(err);
  }
};

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log("Data deleted successfully");
  } catch (err) {
    console.error(err);
  }
};

// myFileWriter("harshal.txt", "hello");
// myFileReader("harshal.txt");
// myFileUpdater("harshal.txt", " world");
// myFileDeleter("harshal.txt");
