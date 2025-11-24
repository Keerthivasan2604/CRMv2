const { exec } = require("child_process");

function run(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function gitCommitAndPush(message) {
  try {
    console.log("Adding files...");
    await run("git add .");

    console.log("Committing...");
    await run(`git commit -m "${message}"`);

    console.log("Pushing...");
    await run("git push origin main");

    console.log("✅ Successfully pushed to GitHub!");
  } catch (error) {
    console.error("❌ Git Error:", error);
  }
}

gitCommitAndPush("Auto-commit from JS script");
