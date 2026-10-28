const { removeBackground } = require('@imgly/background-removal-node');
const { pathToFileURL } = require('url');
const fs = require('fs');
const path = require('path');

async function processStudioPortraits() {
  const tasks = [
    {
      input: path.resolve('public/images/about/team/designer-portrait.jpg'),
      output: path.resolve('public/images/about/team/designer-clean.png')
    },
    {
      input: path.resolve('public/images/about/team/architect-portrait.jpg'),
      output: path.resolve('public/images/about/team/architect-clean.png')
    },
    {
      input: path.resolve('public/images/about/team/developer-portrait.jpg'),
      output: path.resolve('public/images/about/team/developer-clean.png')
    },
    {
      input: path.resolve('public/images/about/team/growth-portrait.jpg'),
      output: path.resolve('public/images/about/team/growth-clean.png')
    }
  ];

  for (const task of tasks) {
    console.log(`Processing ${task.input}...`);
    try {
      const fileUrl = pathToFileURL(task.input).href;
      const blob = await removeBackground(fileUrl);
      const buffer = Buffer.from(await blob.arrayBuffer());
      fs.writeFileSync(task.output, buffer);
      console.log(`Saved: ${task.output}`);
    } catch (err) {
      console.error(`Error on ${task.input}:`, err);
    }
  }
}

processStudioPortraits().then(() => console.log('Studio cutouts done!'));
