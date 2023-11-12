import fs from 'fs-extra';
import path from 'path';

function findJsonFiles(folderPath) {
  const files = fs.readdirSync(folderPath);
  const jsonFiles = [];

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // 如果是子文件夹，递归查找
      const subfolderJsonFiles = findJsonFiles(filePath);
      jsonFiles.push(...subfolderJsonFiles);
    } else if (file.endsWith('.json')) {
      jsonFiles.push(filePath);
    }
  }

  return jsonFiles;
}

export default function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'create a component with your choices',
    prompts: [
      // 组件类型
      {
        type: 'list',
        name: 'type',
        message: '组件类型',
        choices: ['map'],
      },
    ],
    // actions refer to  https://plopjs.com/documentation/#taking-it-further
    actions: function (data) {
      var actions = [];

      if (data.type === 'map') {
        const folderPath = `packages/map/src/assets/geoJson`;
        const jsonFiles = findJsonFiles(folderPath);

        const fileNames = jsonFiles.map((jsonFile) => {
          const fileNameWithExtension = path.basename(jsonFile);
          const fileNameWithoutExtension = path.parse(fileNameWithExtension).name;
          return { fileName: fileNameWithoutExtension, path: path.relative(folderPath, jsonFile) };
        });

        actions.push({
          data: {
            fileNames,
          },
          type: 'addMany',
          destination: folderPath,
          base: 'examples/hbs/{{type}}',
          templateFiles: 'examples/hbs/{{type}}/**',
          stripExtensions: ['hbs'],
        });
      }

      return actions;
    },
  });
}
