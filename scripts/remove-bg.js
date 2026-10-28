const { removeBackground } = require('@imgly/background-removal-node');
const { pathToFileURL } = require('url');
const fs = require('fs');
const path = require('path');

async function processImages() {
  const tasks = [
    {
      input: path.resolve('public/images/about/team/designer.jpg'),
      output: path.resolve('public/images/about/team/designer-transparent.png')
    },
    {
      input: path.resolve('public/images/about/team/architect.jpg'),
      output: path.resolve('public/images/about/team/architect-transparent.png')
    },
    {
      input: path.resolve('public/images/about/team/developer.jpg'),
      output: path.resolve('public/images/about/team/developer-transparent.png')
    },
    {
      input: path.resolve('public/images/about/team/growth.jpg'),
      output: path.resolve('public/images/about/team/growth-transparent.png')
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

processImages().then(() => console.log('All done!'));
