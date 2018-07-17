var telemetry = {
  seq: 0,
  type: 'event',
  event: 'telemetry',
  body: {
    telemetryEventName: 'projectInfo',
    payload: {
      projectId: 'd2a20dab86e5359b7b3cd1dd0abd84dd',
      fileStats: { js: 0, jsx: 0, ts: 5, tsx: 0, dts: 26 },
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        declaration: false,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        lib: ['dom', 'es6'],
        module: 'es6',
        moduleResolution: 'node',
        sourceMap: true,
        target: 'es6',
        plugins: ['', '']
      },
      typeAcquisition: { enable: false, include: false, exclude: false },
      extends: false,
      files: false,
      include: false,
      exclude: false,
      compileOnSave: false,
      configFileName: 'tsconfig.json',
      projectType: 'configured',
      languageServiceEnabled: true,
      version: '2.8.1'
    }
  }
};

var configFileDiag = {
  seq: 0,
  type: 'event',
  event: 'configFileDiag',
  body: {
    triggerFile: '/Users/mhartington/testTs/main.ts',
    configFile: '/Users/mhartington/testTs/tsconfig.json',
    diagnostics: []
  }
};

var installing = {
  seq: 0,
  type: 'event',
  event: 'typingsInstallerPid',
  body: { pid: 23506 }
};

var match = {
  seq: 0,
  type: 'response',
  command: 'reload',
  request_seq: 2,
  success: true,
  body: { reloadFinished: true }
};


 var res = {
  seq: 0,
  type: 'response',
  command: 'quickinfo',
  request_seq: 3,
  success: true,
  body: {
    kind: 'let',
    kindModifiers: '',
    start: { line: 48, offset: 5 },
    end: { line: 48, offset: 10 },
    displayString:
      "let users: {\n    'user': string;\n    'age': number;\n    'active': boolean;\n}[]",
    documentation: '',
    tags: []
  }
};
