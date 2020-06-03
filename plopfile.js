module.exports = plop => {
    plop.setGenerator('screen', {
        description: 'Create a reusable Screen',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your Screen name?',
            },
        ],
        actions: [
            {
                type: 'add',
                // Plop will create directories for us if they do not exist
                // so it's okay to add files in nested locations.
                path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/screens/screen.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/screens/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'plop-templates/screens/screen.test.js.hbs',
            },
            {
                type: 'add',
                path:
                    'src/screens/{{pascalCase name}}/{{pascalCase name}}.style.js',
                templateFile: 'plop-templates/screens/screen.style.js.hbs',
            },
            {
                type: 'add',
                path: 'src/screens/{{pascalCase name}}/index.js',
                templateFile: 'plop-templates/screens/index.js.hbs',
            },
            {
                // Adds an index.js file if it does not already exist
                type: 'add',
                path: 'src/screens/index.js',
                templateFile: 'plop-templates/injectable-index.js.hbs',
                // If index.js already exists in this location, skip this action
                skipIfExists: true,
            },
            {
                // Action type 'append' injects a template into an existing file
                type: 'append',
                path: 'src/screens/index.js',
                // Pattern tells plop where in the file to inject the template
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/screens/index.js',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    });
};
