require('esbuild').serve({
    servedir: 'www',
  }, {
    entryPoints: ['ts/app.tsx'],
    outdir: 'www/js',
    bundle: true,
    target: 'es2020',
    format: 'esm',
    color: true,
    sourcemap: true,
  });